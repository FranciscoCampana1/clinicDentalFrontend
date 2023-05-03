import React, { useEffect, useState } from "react";
import tokenStorageService from "../../../_services/tokenStorage";
import userService from "../../../_services/userService";

export default function AllUsers() {
  const token = tokenStorageService.get();
  console.log(token);

  //hooks
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers(token);
  }, []);

  const getAllUsers = async (token) => {
    try {
      const response = await userService.getAllUsers(token);
      console.log(response);
      setUsers(response.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Usuarios</h1>

      {users.map((user) => (
        <div key={user.id}>{user.usuario.nombre} </div>
      ))}
    </div>
  );
}
