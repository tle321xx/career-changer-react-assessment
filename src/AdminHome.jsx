
import React, { useState } from 'react';

function AdminHome({employees}) {
    const [ name, setName] = useState('')
    const [ lastname, setLastname] = useState('')
    const [ position, setPosition] = useState('')

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleLastnameChange = (event) => {
        setLastname(event.target.value)
    }

    const handlePositionChange = (event) => {
        setPosition(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newId = employees.length + i;
        const newEmployee = {id: newId, name: name, lastname: lastname, position: position}
        newEmployee([...employees, newEmployee])
        setName('')
        setLastname('')
        setPosition('')
    }

    const handleDelete = (i) => {
        const DeleteEmployee = [...employees];
        DeleteEmployee.splice(i, 1);
        setEmployees(DeleteEmployee)
    }

    return (
        <div>
            <h2>Home Admin Sector</h2>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Lastname</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.Name}</td>
                        <td>{employee.Lastname}</td>
                        <td>{employee.Position}</td>
                        <td><button onClick={() => handleDelete(i)}>delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <h2>Create User here</h2>
            <div>
                <label>
                    Name:
                    <input type='text' value={name} onChange={handleNameChange}/>
                </label>
                <label>
                    Lastname:
                    <input type='text' value={lastname} onChange={handleLastnameChange}/>
                </label>
                <label>
                    Position:
                    <input type='text' value={position} onChange={handlePositionChange}/>
                </label>
                <button onClick={handleSubmit}>save</button>
            </div>
        </div>
    )
}

export default AdminHome