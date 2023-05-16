import React, { useEffect, useState } from "react";
import "./Citas.scss";
import { DataListTable } from "../../components";
import citaService from "../../_services/citaService";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function citas() {
  //hooks

  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const isLoggedIn = authState.isLoggedIn;
  const isOdontologo = authState.userInfo.role == "odontologo";
  const isPatient = authState.userInfo.role == "user";
  const [cita, setCita] = useState([]);
  const [idCita, setIdCita] = useState();
  const [formValues, setFormValues] = useState({});
  const [formCreateCita, setCreateCita] = useState(false);
  const [formUpdateCita, setFormUpdateCita] = useState(false);
  const [formDeleteCita, setFormDeleteCita] = useState(false);

  useEffect(() => {
    if (isLoggedIn && isPatient) {
      getCitasPaciente(authState.userToken);
    } else if (isLoggedIn && isOdontologo) {
      getCitasOdontologos(authState.userToken);
    } else {
      navigate("");
    }
  }, []);

  const handleCitas = (e) => {
    const { dataId } = e.currentTarget.dataset;
    console.log(dataId);
  };

  //handler para escuchar cambio en inputs

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value, // key: value
    });
  };

  const handleChangeIdCita = (e) => {
    const { value } = e.target;
    setIdCita(value);
    console.log(idCita);
  };

  const handleDeleteCita = (e) => {
    const { value } = e.target;
    setIdCita(value);
    console.log(idCita);
  };

  //handlers que cambian el valor para pintar y ocultar formularios

  const handleFormUpdateCita = () => {
    setFormUpdateCita(true);
    setCreateCita(false);
    setFormDeleteCita(false);
  };

  const handleFormDeleteCita = () => {
    setFormDeleteCita(true);
    setCreateCita(false);
    setFormUpdateCita(false);

  };

  const handleFormCreateCita = () => {
    setCreateCita(true);
    setFormUpdateCita(false);
    setFormDeleteCita(false);

  };

  //Handlers que llaman a la funcion para ejecutar la peticion

  const handleSubmitUpdate = () => {
    updateCita(authState.userToken, formValues, idCita);
  };

  const handleSubmitCreate = () => {
    createCita(authState.userToken, formValues);
  };

  const handleSubmitDelete = () => {
    deleteCita(authState.userToken, idCita);
  };

  //funciones que llaman al servicio

  const getCitasOdontologos = async (token) => {
    try {
      const response = await citaService.getCitasOdontologo(token);
      setCita(response.cita);
    } catch (error) {
      console.log(error);
    }
  };

  const getCitasPaciente = async (token) => {
    try {
      const response = await citaService.getCitasPaciente(token);
      setCita(response.citas);
    } catch (error) {
      console.log(error);
    }
  };

  const createCita = async (token, body) => {
    try {
      const response = await citaService.createCita(token, body);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCita = async (token, data, idCita) => {
    try {
      const response = await citaService.updateCita(token, data, idCita);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCita = async (token, idCita) => {
    try {
      const response = await citaService.deleteCita(token, idCita);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" contenedor-citas">
      <div className="container page-and-buttons">
        {isOdontologo && (
          <DataListTable
            data={cita}
            title="Tus citas"
            headers={["ID cita", "ID paciente", "Fecha", "Hora"]}
            attributes={["id", "id_paciente", "fecha", "horario"]}
            onChange={handleCitas}
          />
        )}

        {isPatient && (
          <div className="container">
            
              <DataListTable
                data={cita}
                title="Tus citas"
                headers={["ID cita", "ID odontologo", "Fecha", "Hora"]}
                attributes={["id", "id_odontologo", "fecha", "horario"]}
                onChange={handleCitas}
              />
            
            
              <div className="contenedor-botones">
                <div>
                  <button type="submit" onClick={handleFormCreateCita}>
                    Crear cita
                  </button>
                </div>
                <div>
                  <button type="submit" onClick={handleFormUpdateCita}>
                    Modificar cita
                  </button>
                </div>
                <div>
                  <button type="submit" onClick={handleFormDeleteCita}>
                    Eliminar Cita
                  </button>
                </div>
              </div>
            
          </div>
        )}

        {formUpdateCita && (
          <div className="container">
            <div className="form-citas">
              <Form onSubmit={handleSubmitUpdate} className="padreBtn">
                <Form.Group className="mb-3  rounded p-4 inputForm">
                  <Form.Label></Form.Label>
                  <Form.Label>Identificador de cita</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="5"
                    name="idCita"
                    onChange={handleChangeIdCita}
                  />
                  <Form.Label>Día de la cita</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="fecha"
                    name="fecha"
                    value={formValues.fecha}
                    onChange={handleChange}
                  />
                  <Form.Label>Horario </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="10:00:00 "
                    name="horario"
                    value={formValues.horario}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="buttonUpdate"
                >
                  Modificar
                </Button>
              </Form>
            </div>
          </div>
        )}
        {formDeleteCita && (
          <div className="container">
            <div className="form-citas">
              <Form onSubmit={handleSubmitDelete} className="padreBtn">
                <Form.Group className="mb-3  rounded p-4 inputForm">
                  <Form.Label></Form.Label>
                  <Form.Label>Identificador de cita</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="5"
                    name="idCita"
                    onChange={handleDeleteCita}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="buttonUpdate"
                >
                  Eliminar
                </Button>
              </Form>
            </div>
          </div>
        )}
        {formCreateCita && (
          <div className="container">
            <div className="form-citas">
              <Form onSubmit={handleSubmitCreate} className="padreBtn">
                <Form.Group className="mb-3  rounded p-4 inputForm">
                  <Form.Label>id_odontologo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="id_odontologo "
                    name="id_odontologo"
                    value={formValues.id_odontologo}
                    onChange={handleChange}
                  />
                  <Form.Label>Día de la cita</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="fecha"
                    name="fecha"
                    value={formValues.fecha}
                    onChange={handleChange}
                  />
                  <Form.Label>Horario </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="10:00:00 "
                    name="horario"
                    value={formValues.horario}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="buttonUpdate"
                >
                  Crear cita
                </Button>
              </Form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
