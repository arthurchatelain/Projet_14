import '../Assets/Style/CreateEmployee.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import Header from '../Components/Header';
import { States, formatStates, department } from '../Assets/Data/States';
import Modal from '../Components/Modal';
import PickerDate from '../Components/PickerDate';
import { employee } from '../lib/employee';
import { Select } from 'select_component_poc14';

/**
 * This page is to create a new employee
 */

export default function NewEmployee () {

    // User info's state initialisation
    let [FirstName, setFirstName] = useState('')
    let [LastName, setLastName] = useState('')
    let [BirthDate, setBirthDate] = useState(new Date())
    let [StartDate, setStartDate] = useState(new Date())
    let [Street, setStreet] = useState('')
    let [City, setCity] = useState('')
    let [State, setState] = useState('')
    let [ZipCode, setZipCode] = useState('')
    let [Department, setDepartment] = useState('')

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
        const newEmployee = new employee(FirstName, LastName, BirthDate, StartDate, Street, City, State, ZipCode, Department)
        newEmployee.isValid()
            .then(() => {
                newEmployee.BirthDate = newEmployee.BirthDate.toISOString().split('.')[0]+"Z"
                newEmployee.StartDate = newEmployee.StartDate.toISOString().split('.')[0]+"Z"
                newEmployee.State = formatStates.find(i => i.stateName === newEmployee.State).twoDigits
                createEmployee(newEmployee)
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
                        <PickerDate label='Date of birth' title='birthDate' value={BirthDate} OnChange={ e => setBirthDate(e)}/>
                        <PickerDate label='Start Date' title='startDate' value={StartDate} OnChange={ e => setStartDate(e)}/>
                    </div>
                    <div className='adress'>
                        <h2>Adress</h2>
                        <div className='placeContainer'>
                            <input className='inputContainer' onChange={e => setStreet(e.target.value)} name='street' id='street' placeholder='Street' />
                            <input className='inputContainer' onChange={e => setCity(e.target.value)} name='city' id='city' placeholder='City' />
                        </div>
                        <div className='placeContainer'>
                            <div className='inputContainerSelect'><Select data={States} title='State' OnChange={e => setState(e)}/></div>
                            <input className='inputContainer' name='zipCode' id='zipCode' placeholder='Zip Code' onChange={e => setZipCode(e.target.value)} />
                        </div>
                    </div>
                    <div className='formBot'>
                        <div id='department' className='inputContainerSelect department'><Select OnChange={e => setDepartment(e)} data={department} title='Department'/></div>
                        <button className='createButton' onClick={() => submitFormNewUser()}>Create new Employee</button>
                    </div>
                </div>
            </main>
            { isModalOpen ? <Modal CrossOnClick={closeModal} text='Employee Created !'/> : '' }
        </div>
    )
}