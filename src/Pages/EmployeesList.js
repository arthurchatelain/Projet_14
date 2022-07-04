import '../Assets/Style/EmployeesList.css'
import { Link } from "react-router-dom"
import { Table } from '../Components/Table/Table';
import Header from '../Components/Header';

/**
 * This page lists all the current employees
 */

export default function EmployeesList () {

    return (
        <div className="EmployeesList">
            <Header />
            <main className='listContent'>
                <section className='tableContainer'>
                    <Link className='newEmployee' to='/create_employee'>Add Employee</Link>
                    <h1>Currently registered Employeess</h1>
                    <Table />
                </section>
            </main>
        </div>
    )
}