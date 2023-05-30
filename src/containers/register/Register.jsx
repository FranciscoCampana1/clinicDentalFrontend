import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import authService from "../../_services/authService";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formValues, setFormValues] = useState({});
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value, // key: value
    });
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formValues);
    navigate('/login')
  };

  const registerUser = async (body) => {
    try {
      const response = await authService.registerUser(body);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contenedor-perfil">
        <Form noValidate onSubmit={handleSubmit} className="padreBtn">
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
          <Button variant="primary" type="submit" className="buttonUpdate">
            Crear perfil
          </Button>
        </Form>
      </div>
    </>
  );
}
