import { createStore } from "redux";
import { initialEmployees } from "./Assets/Data/initialData";

// State initialisation. Either from some given data or, if defined inside, the local storage

const initialState = (localStorage.state !== undefined) ? JSON.parse(localStorage.state) : {employees: initialEmployees}

// Actions creators

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE'
export const INIT_EMPLOYEES = 'INIT_EMPLOYEES'

// Reducer

function reducer(state = initialState, action) {

  let newState

  switch (action.type) {
    case INIT_EMPLOYEES:
      newState = {...state, employees: []}
      break
    case ADD_EMPLOYEE:
      newState = {...state, employees: state.employees.concat(action.payload)}
      break
    default: 
      newState = state
      break
  }

  // localStorage update
  localStorage.setItem('state', JSON.stringify(newState))
  return newState
}

export const store = createStore(reducer);