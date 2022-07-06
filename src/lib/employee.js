import { states, departmentList } from "../Assets/Data/States"

// Tests if a typed data are valid

const validChaine = (chaine) => {
    let value = true
    Array.from(chaine).forEach(item => {
        Array.from('&!§:/;.%*µ$£@|(){}=+#~').forEach(i => {
            if (i === item) value = false
        })
    })
    return value
}

export async function isValid (firstName = '', lastName = '', street = '', city = '', state = '', zipCode = '', department = '') {
        if (firstName.length <= 2 || validChaine(firstName) === false) throw new Error('invalid firstName')
        else if (lastName.length <= 2 || validChaine(lastName) === false) throw new Error('invalid lastName')
        else if (street.length <= 3 || validChaine(street) === false) throw new Error('invalid street')
        else if (city.length <= 3 || validChaine(city) === false) throw new Error('invalid city')
        else if (zipCode.match(/^([0-9]){1,}$/) === null) throw new Error('invalid zipCode')
        else if (departmentList.find(item => item === department) === undefined) throw new Error('please select a valid department')
        else if (states.find(item => item === state) === undefined) throw new Error('please select a valid state')
        else Promise.resolve()
    }