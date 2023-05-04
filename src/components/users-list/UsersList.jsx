import React from "react";
import "./UsersList.scss";
import { BsFillEnvelopeFill, BsFillCalendarWeekFill } from "react-icons/bs";


export default function UsersList({ users }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Last name</th>
            <th><BsFillEnvelopeFill/>Email</th>
            <th><BsFillCalendarWeekFill/> Birth day</th>
            <th>Student</th>
          </tr>
        </thead>
        <tbody>
          {users.map( (user)=> (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nombre}</td>
                <td>{user.apellidos}</td>
                <td> {user.email}</td>
                <td>{user.fecha_de_nacimiento}</td>
                <td>{user?.paciente ? "YES" : "NO"}</td>
            </tr>
          )  )}
        </tbody>
      </table>
    </div>
  );
}
