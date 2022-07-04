import { Routes, Route } from "react-router-dom";
import EmployeesList from './Pages/EmployeesList';
import NewEmployee from './Pages/NewEmployee';

// Handle the different routes

function App() {
  const theme = {}
  theme.direction = 'rtl'
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<EmployeesList/>}/>
        <Route path='/employees_list' element={<EmployeesList />}/>
        <Route path='/create_employee' element={<NewEmployee />} />
      </Routes>
    </div>
  )
}

export default App;
