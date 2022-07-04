import { format } from "date-fns"

export const COLUMNS = [
    {
        Header: 'First Name',
        accessor: 'FirstName'
    },
    {
        Header: 'Last Name',
        accessor: 'LastName'
    },
    {
        Header: 'Start Date',
        accessor: 'StartDate',
        Cell: ({value}) => { return format(new Date(value), 'dd/MM/yyyy')}
    },
    {
        Header: 'Department',
        accessor: 'Department'
    },
    {
        Header: 'Date of Birth',
        accessor: 'BirthDate',
        Cell: ({value}) => { return format(new Date(value), 'dd/MM/yyyy')}
    },
    {
        Header: 'Street',
        accessor: 'Street'
    },
    {
        Header: 'City',
        accessor: 'City'
    },
    {
        Header: 'State',
        accessor: 'State'
    },
    {
        Header: 'Zip Code',
        accessor: 'ZipCode'
    }
]