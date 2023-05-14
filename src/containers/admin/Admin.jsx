import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userService from "../../_services/userService";
import { DataListTable, UsersList } from "../../components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Admin.scss";

export default function Admin() {
  //hooks
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const [users, setUsers] = useState([]);
  const [usersPage, setUsersPage] = useState(1);
  const [usersPages, setUsersPages] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [formValues, setFormValues] = useState({});
  const [formRegisterOdontologo, setFormRegisterOdontologo] = useState(false);
  const [showTableAdmin, setShowTableAdmin] = useState(true)

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
        return setUsersPage(1);
      case "last":
        return setUsersPage(usersPages);
    }
  };

  const handleSingleUser = (dataId) => {
    console.log(dataId);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value, // key: value
    });
  };

  const handleSubmit = () => {
    createProfileOdontologo(authState.userToken, formValues);
  };

  const handleRegisterOdontologo = () => {
    setFormRegisterOdontologo(true);
    setShowTableAdmin(false)
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

  const createProfileOdontologo = async (token, data) => {
    try {
      const response = await userService.createProfileOdontologo(token, data);
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
    <>
      <div className=" admin">
        {isAdmin && showTableAdmin &&(
          <>
            <h1 style={{ textAlign: "center", marginBottom: "1em" }}>
              Admin panel
            </h1>
            <DataListTable
              data={users}
              title="Users"
              count={usersCount}
              headers={["ID", "Nombre", "Apellidos", "Email", "Birthday"]}
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
            <div>
              <button type="submit" onClick={handleRegisterOdontologo}>
                {" "}
                Registrar Personal{" "}
              </button>
            </div>
          </>
        )}
        {formRegisterOdontologo && (
          <div className="perfil-formulario">
            <div className="formulario">
              <Form onSubmit={handleSubmit} className="padreBtn">
                <Form.Group className="mb-3  rounded p-4 inputForm">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nombre "
                    name="nombre"
                    value={formValues.nombre}
                    onChange={handleChange}
                  />
                  <Form.Label>Apellidos</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Apellidos "
                    name="apellidos"
                    value={formValues.apellidos}
                    onChange={handleChange}
                  />
                  <Form.Label>Matrícula </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="89585475 "
                    name="matriculaOdontologo"
                    value={formValues.matriculaOdontologo}
                    onChange={handleChange}
                  />
                  <Form.Label>Fecha de nacimiento</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="fecha de nacimiento "
                    name="fecha_de_nacimiento"
                    value={formValues.fecha_de_nacimiento}
                    onChange={handleChange}
                  />
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email "
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Teléfono "
                    name="telefono"
                    value={formValues.telefono}
                    onChange={handleChange}
                  />
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="buttonUpdate"
                >
                  Crear perfil 
                </Button>
              </Form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
