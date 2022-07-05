import { states, departmentList } from "../Assets/Data/States"

// Tests if a typed data are valid

export async function isValid (firstName = '', lastName = '', street = '', city = '', state = '', zipCode = '', department = '') {
        if (firstName.match(/^([a-zA-Z\s\s+]){3,}$/) === null) throw new Error('invalid firstName')
        else if (lastName.match(/^([a-zA-Z\s\s+]){3,}$/) === null) throw new Error('invalid lastName')
        else if (street.match(/^([a-zA-Z\s\s+]){3,}$/) === null) throw new Error('invalid street')
        else if (city.match(/^([a-zA-Z\s\s+]){3,}$/) === null) throw new Error('invalid city')
        else if (zipCode.match(/^([0-9]){1,}$/) === null) throw new Error('invalid zipCode')
        else if (departmentList.find(item => item === department) === undefined) throw new Error('please select a valid department')
        else if (states.find(item => item === state) === undefined) throw new Error('please select a valid state')
        else Promise.resolve()
    }