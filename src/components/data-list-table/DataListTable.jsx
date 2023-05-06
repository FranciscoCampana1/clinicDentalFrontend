import React from "react";
//import "./UsersList.scss";
import { TablePagination } from "../../components";
import { dateFormat } from "../../_util/date";

export default function DataListTable({
   data,
   title = "Data",
   count,
   headers,
   attributes,
   onChange,
   className,
   pagination = null,
}) {
   return (
      <div className={className}>
         <table>
            <thead>
               <tr colSpan={headers.length}>
                  <th>
                     <div className="tableTitle">
                        {" "}
                        {title} ({count})
                     </div>
                  </th>
               </tr>
               <tr>
                  {headers.map((th, index) => (
                     <th key={index}>{th}</th>
                  ))}
               </tr>
            </thead>

            <tbody>
               {data.map((d) => (
                  <tr data-user-id={d.id} onClick={onChange} key={d.id}>
                     {attributes.map((attr, index) => (
                        <td key={index}>{d[attr]}</td>
                     ))}
                  </tr>
               ))}
            </tbody>

            {pagination && (
               <tfoot>
                  <tr>
                     <td colSpan={headers.length}>
                        <TablePagination
                           page={pagination.page}
                           totalPages={pagination.totalPages}
                           count={pagination.count}
                           limit={data.length}
                           onChange={onChange}
                        />
                     </td>
                  </tr>
               </tfoot>
            )}
         </table>
      </div>
   );
}