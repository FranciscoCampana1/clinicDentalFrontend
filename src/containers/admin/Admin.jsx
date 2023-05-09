import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userService from "../../_services/userService";
import { DataListTable, UsersList } from "../../components";
import { dateFormat } from "../../_util/date";
import './Admin.scss'

export default function Admin() {
   //hooks
   const [users, setUsers] = useState([]);
   const [usersPage, setUsersPage] = useState(1);
   const [usersPages, setUsersPages] = useState(0);
   const [usersCount, setUsersCount] = useState(0);

   const navigate = useNavigate();
   const authState = useSelector((state) => state.auth);

   const isAdmin = authState.userInfo.role == "admin";

   useEffect(() => {
      if (isAdmin) {
         getAllUsers(authState.userToken, usersPage);
      } else {
         navigate("/");
      }
   }, [usersPage]);

   const handleUsersList = (e) => {
      const { page, dataId } = e.currentTarget.dataset;
      handleUsersListPagination(page);
      handleSingleUser(dataId);
   };

   const handleUsersListPagination = (page) => {
      switch (page) {
         case "next":
            return setUsersPage((page) => page + 1);
         case "prev":
            return setUsersPage((page) => page - 1);
         case "first":
               return setUsersPage( 1);
          case "last":
               return setUsersPage( usersPages )
      }
   };

   const handleSingleUser = (dataId) => {
      //
      console.log(dataId);
   };

   const getAllUsers = async (token, page) => {
      try {
         const response = await userService.getAllUsers(token, page);
         setUsers(response.results);
         setUsersCount(response.info.total_results);
         setUsersPages(response.info.total_pages);
      } catch (error) {
         console.log(error);
      }
   };
      //esta funcion es para aplanar el array y que react pueda pintarlo.
   // const newUsers = (users) =>
   //    users.map((user) => {
   //       user.fecha_de_nacimiento = dateFormat(user.fecha_de_nacimiento);
   //       return user;
   //    });

   return (
      <div className="container admin">
         {isAdmin && (
            <>
               <h1 style={{textAlign: "center", marginBottom: "1em"}}>Admin panel</h1>
               <DataListTable
                  data={users}
                  title="Users"
                  count={usersCount}
                  headers={[
                     "ID",
                     "Nombre",
                     "Apellidos",
                     "Email",
                     "Birthday",
                  ]}
                  attributes={[
                     "id",
                     "nombre",
                     "apellidos",
                     "email",
                     "fecha_de_nacimiento",
                  ]}
                  pagination={{
                     page: usersPage,
                     totalPages: usersPages,
                     count: usersCount,
                  }}
                  onChange={handleUsersList}
               />
            </>
         )}
      </div>
   );
}
