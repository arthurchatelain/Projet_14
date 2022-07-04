import { States, department } from "../Assets/Data/States"

// Class for an employee with its different informations

export class employee {
    constructor(FirstName, LastName, BirthDate, StartDate, Street, City, State, ZipCode, Department){
        this.FirstName = FirstName || ''
        this.LastName = LastName || ''
        this.BirthDate = BirthDate || new Date()
        this.StartDate = StartDate || new Date()
        this.Street = Street || ''
        this.City = City || ''
        this.State = State || ''
        this.ZipCode = ZipCode || ''
        this.Department = Department || ''
        
    }

    // This function tests if the data typed by the user are valid

    async isValid () {
        if (this.FirstName.match(/^([a-zA-Z\s\s+]){3,}$/) === null) throw new Error('invalid firstName')
        else if (this.LastName.match(/^([a-zA-Z\s\s+]){3,}$/) === null) throw new Error('invalid lastName')
        else if (this.Street.match(/^([a-zA-Z\s\s+]){3,}$/) === null) throw new Error('invalid street')
        else if (this.City.match(/^([a-zA-Z\s\s+]){3,}$/) === null) throw new Error('invalid city')
        else if (this.ZipCode.match(/^([0-9]){1,}$/) === null) throw new Error('invalid zipCode')
        else if (department.find(item => item === this.Department) === undefined) throw new Error('please select a valid department')
        else if (States.find(item => item === this.State) === undefined) throw new Error('please select a valid state')
        else Promise.resolve()
    }
}