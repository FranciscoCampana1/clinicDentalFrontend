import React, { useEffect } from "react";
import "./UserProfile.scss";
import { useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import userService from "../../_services/userService";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function UserProfile() {
  const [user, setUser] = useState({});
  const [modifyProfile, setModifyProfile] = useState(false);
  const [formValues, setFormValues] = useState({});
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    if (authState.userToken) {
      getProfile(authState.userToken);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value, // key: value
    });
  };

  const handleChangeProfile = () => {
    setModifyProfile(true);
  };

  const handleSubmit = () => {
    updateProfile(authState.userToken, formValues);
  };
  const updateProfile = async (token, body) => {
    const response = await userService.updateProfile(token, body);
  };

  const getProfile = async (token) => {
    try {
      const response = await userService.getProfile(token);
      setUser(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="gradient-custom-2 contenedor-perfil">
        {!modifyProfile && (
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="9" xl="7">
                <MDBCard>
                  <div
                    className="rounded-top text-white d-flex flex-row"
                    style={{ backgroundColor: "#000", height: "215px" }}
                  >
                    <div
                      className="ms-4 mt-5 d-flex flex-column"
                      style={{ width: "150px" }}
                    >
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                        alt="Generic placeholder image"
                        className="mt-4 mb-2 img-thumbnail"
                        fluid
                        style={{ width: "150px", zIndex: "1" }}
                      />
                      <div style={{ marginTop: "3em" }}>
                        <MDBBtn
                          outline
                          color="dark"
                          style={{ height: "36px", overflow: "visible" }}
                          onClick={handleChangeProfile}
                        >
                          Editar Perfil
                        </MDBBtn>
                      </div>
                    </div>
                    <div className="ms-3" style={{ marginTop: "130px" }}>
                      <MDBTypography tag="h5">
                        {user.nombre} {user.apellidos}
                      </MDBTypography>
                      <MDBCardText>
                        {authState.userInfo.role.toUpperCase()}
                      </MDBCardText>
                    </div>
                  </div>
                  <div
                    className="p-4 text-black"
                    style={{ backgroundColor: "#f8f9fa" }}
                  ></div>
                  <MDBCardBody
                    className="text-black p-4"
                    style={{ textAlign: "center", marginTop: "1.5em" }}
                  >
                    <div className="mb-5">
                      <p className="lead fw-normal mb-1">Información</p>
                      <div
                        className="p-4"
                        style={{ backgroundColor: "#f8f9fa" }}
                      >
                        <MDBCardText className="font-italic mb-1">
                          Fecha de nacimiento: {user.fecha_de_nacimiento}
                        </MDBCardText>
                        <MDBCardText className="font-italic mb-1">
                          Email: {user.email}
                        </MDBCardText>
                        <MDBCardText className="font-italic mb-0">
                          Teléfono: {user.telefono}
                        </MDBCardText>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        )}
        {modifyProfile && (
          <div className="perfil-formulario">
            <div className="formulario">
              <Form onSubmit={handleSubmit} className="padreBtn" >
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
                  <Form.Label>Fecha de nacimiento</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="fecha de nacimiento "
                    name="fecha_de_nacimiento"
                    value={formValues.fecha_de_nacimiento}
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
                <Button variant="primary" type="submit" className="buttonUpdate">
                  Update
                </Button>
              </Form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
