import AdminHome from './AdminHome'
import Navbar from './navbar'
import UserHome from './user'
import Owner from './Owner'
import {useState} from 'react';

export const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {

  const [ employees, setEmployees] = useState(mockEmployees)
  // const addemployees = (employee, index) => {
  //   const { newEmployee, value } = employee
  //   const updatedEmployees = [...employees]
  //   updatedEmployees[index][newEmployee] = value
  //   setEmployees(updatedEmployees)
  // }
  return (
    <div>
      <Navbar />
      <UserHome employees={employees}/>
      <Owner />
      <AdminHome employees={employees}/>
    </div>
  )
  }



export default Home
