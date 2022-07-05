import { format } from "date-fns"

export const COLUMNS = [
    {
        Header: 'First Name',
        accessor: 'firstName'
    },
    {
        Header: 'Last Name',
        accessor: 'lastName'
    },
    {
        Header: 'Start Date',
        accessor: 'startDate',
        Cell: ({value}) => { return format(new Date(value), 'dd/MM/yyyy')}
    },
    {
        Header: 'Department',
        accessor: 'department'
    },
    {
        Header: 'Date of Birth',
        accessor: 'birthDate',
        Cell: ({value}) => { return format(new Date(value), 'dd/MM/yyyy')}
    },
    {
        Header: 'Street',
        accessor: 'street'
    },
    {
        Header: 'City',
        accessor: 'city'
    },
    {
        Header: 'State',
        accessor: 'state'
    },
    {
        Header: 'Zip Code',
        accessor: 'zipCode'
    }
]