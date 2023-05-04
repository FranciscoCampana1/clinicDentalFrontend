import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userService from "../../_services/userService";
import { UsersList } from "../../components";

export default function Admin() {
  //hooks
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);

  const isAdmin = authState.userInfo.role == "admin";

  useEffect(() => {
    if (isAdmin) {
      getAllUsers(authState.userToken)
    } else {
      navigate("/");
    }
  }, []);

  const getAllUsers = async (token) => {
    try {
      const response = await userService.getAllUsers(token);
      setUsers(response.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isAdmin && (
        <>
          <h1>Admin Panel</h1>
          <UsersList users={users}/>
        </>
      )}
    </>
  );
}
