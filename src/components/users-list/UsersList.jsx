import React from "react";
import "./UsersList.scss";
import { TablePagination } from "../../components";
import { dateFormat } from "../../_util/date";

export default function UsersList({ users, page, pages, count, onChange }) {
   return (
      <div>
         <table>
            <thead>
               <tr colSpan={6}>
                  <th>
                     <div className="tableTitle"> Users </div>
                  </th>
               </tr>
               <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Last name</th>
                  <th>Email</th>
                  <th>Birthday</th>
                  <th>Student</th>
               </tr>
            </thead>

            <tbody>
               {users.map((user) => (
                  <tr data-user-id={user.id} onClick={onChange} key={user.id}>
                     <td>{user.id}</td>
                     <td>{user.nombre}</td>
                     <td>{user.apellidos}</td>
                     <td>{user.email}</td>
                     <td>{dateFormat(user.fecha_de_nacimiento)}</td>
                     <td>{user?.alumno ? "YES" : "NO"}</td>
                  </tr>
               ))}
            </tbody>
            <tfoot>
               <tr>
                  <td colSpan={6}>
                     <TablePagination
                        page={page}
                        pages={pages}
                        limit={users.length}
                        count={count}
                        onChange={onChange}
                     />
                  </td>
               </tr>
            </tfoot>
         </table>
      </div>
   );
}
