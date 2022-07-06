import '../Assets/Style/CreateEmployee.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import Header from '../Components/Header';
import { states, formatStates, departmentList } from '../Assets/Data/States';
import Modal from '../Components/Modal';
import PickerDate from '../Components/PickerDate';
import { isValid } from '../lib/employee';
import { Select } from 'select_component_poc14';

/**
 * This page is to create a new employee
 */

export default function NewEmployee () {

    // User info's state initialisation
    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    let [birthDate, setBirthDate] = useState(new Date())
    let [startDate, setStartDate] = useState(new Date())
    let [street, setStreet] = useState('')
    let [city, setCity] = useState('')
    let [state, setState] = useState('')
    let [zipCode, setZipCode] = useState('')
    let [department, setDepartment] = useState('')

    // is the modal open or closed
    let [isModalOpen, setIsModalOpen] = useState(false)

    // submit the new employee on redux
    const dispatch = useDispatch()
    const createEmployee = param => dispatch({type: 'ADD_EMPLOYEE', payload: param})

    // Hide/Show modal functions
    const showModal = () => setIsModalOpen(true)
    const hideModal = () => setIsModalOpen(false)
    
    // Handle the close modal action
    const closeModal = () => {
        hideModal()
        window.location.reload()
    }

    // When the user submit the form, if it is valid, it creates a new employee
    const submitFormNewUser = () => {
        isValid(firstName.trim(), lastName.trim(), street.trim(), city.trim(), state, zipCode, department)
            .then(() => {
                birthDate = birthDate.toISOString().split('.')[0]+"Z"
                startDate = startDate.toISOString().split('.')[0]+"Z"
                state = formatStates.find(i => i.stateName === state).twoDigits
                createEmployee({firstName: firstName, lastName: lastName, birthDate: birthDate, startDate: startDate, street: street, city: city, state:  state, zipCode: zipCode, department: department})
                showModal()
            })
            .catch(err => alert(err.message))
    }

    return (
        <div className='CreateEmployee'>
            <Header />
            <main className='Background'>
                <h1>Create Employee</h1>
                <Link className='linkEmployeesList' to='/employees_list'>View employees list</Link>
                <div className='formContainer'>
                    <div className='nameContainer'>
                        <input className='inputContainer' onChange={e => setFirstName(e.target.value)} name='firstName' id='firstName' placeholder='First Name'></input>
                        <input className='inputContainer' onChange={e => setLastName(e.target.value)} name='lastName' id='lastName' placeholder='Last Name'></input>
                    </div> 
                    <div className='datesContainer'>
                        <PickerDate label='Date of birth' title='birthDate' value={birthDate} onChange={ e => setBirthDate(e)}/>
                        <PickerDate label='Start Date' title='startDate' value={startDate} onChange={ e => setStartDate(e)}/>
                    </div>
                    <div className='adress'>
                        <h2>Adress</h2>
                        <div className='placeContainer'>
                            <input className='inputContainer' onChange={e => setStreet(e.target.value)} name='street' id='street' placeholder='Street' />
                            <input className='inputContainer' onChange={e => setCity(e.target.value)} name='city' id='city' placeholder='City' />
                        </div>
                        <div className='placeContainer'>
                            <div className='inputContainerSelect'><Select data={states} title='State' onChange={e => setState(e)}/></div>
                            <input className='inputContainer' name='zipCode' id='zipCode' placeholder='Zip Code' onChange={e => setZipCode(e.target.value)} />
                        </div>
                    </div>
                    <div className='formBot'>
                        <div id='department' className='inputContainerSelect department'><Select onChange={e => setDepartment(e)} data={departmentList} title='Department'/></div>
                        <button className='createButton' onClick={() => submitFormNewUser()}>Create new Employee</button>
                    </div>
                </div>
            </main>
            { isModalOpen ? <Modal crossOnClick={closeModal} text='Employee Created !'/> : '' }
        </div>
    )
}