import React from "react";
import { useState } from "react";
import Home from "./Home";
import { mockEmployees } from "./Home";
// const userSector = (())

function UserHome({employees}) {
    // console.log(mockEmployees)
  return (
    <div>
      <h1>User Home</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Lastname</th>
            <th>Position</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.lastname}</td>
              <td>{employee.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserHome;
