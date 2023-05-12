import React, { useEffect, useState } from "react";
import "./Citas.scss";
import { DataListTable } from "../../components";
import citaService from "../../_services/citaService";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



export default function citas() {
  const [cita, setCita] = useState([]);
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const isLoggedIn = authState.isLoggedIn;
  const isOdontologo = authState.userInfo.role == "odontologo";
  const isPatient = authState.userInfo.role == "user";
  const [formValues, setFormValues] = useState({})
  const [formUpdateCita, setFormUpdateCita] = useState(false)

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value, // key: value
    });
  };

  const handleSubmit = () => {
    updateCita(authState.userToken, formValues, idCita);
  };

  const handleFormUpdateCita = () =>{
    setFormUpdateCita(true)
  }

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

  const updateCita = async (token, data, idCita)=>{
   try {
     const response = await citaService.updateCita(token, data, idCita)
     setCita(response.citas)
   } catch (error) {
      console.log(error)
   }
  }

  return (
    <div className="container">
      {isOdontologo && (<DataListTable
        data={cita}
        title="Tus citas"
        headers={["ID cita", "ID paciente", "Fecha", "Hora"]}
        attributes={["id", "id_paciente" , "fecha", "horario"]}
        onChange={handleCitas}
      />)}


      {isPatient && (<DataListTable
        data={cita}
        title="Tus citas"
        headers={["ID cita", "ID odontologo", "Fecha", "Hora"]}
        attributes={["id", "id_odontologo" , "fecha", "horario"]}
        onChange={handleCitas}
      />)}

      {formUpdateCita && (
         <div className="perfil-formulario">
         <div className="formulario">
           <Form onSubmit={handleSubmit} className="padreBtn">
           <pre style={{ textAlign: "left", width: "250px", margin: "auto" }}>
               {JSON.stringify(formValues, null, 2)}
            </pre>
             <Form.Group className="mb-3  rounded p-4 inputForm">
               <Form.Label></Form.Label>
               <Form.Label>Identificador de cita</Form.Label>
               <Form.Control
                 type="int"
                 placeholder="5"
                 name="idCita"
                 value={formValues.idCita}
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
                 type={"radio"}
                 placeholder="10:00:00 "
                 name="horario"
                 value={formValues.horario}
                 onChange={handleChange}
               />          
             </Form.Group>
             <Button variant="primary" type="submit" className="buttonUpdate">
               Modificar
             </Button>
           </Form>
         </div>
       </div>
      )}

      <div>
        <button type="submit" onClick={handleFormUpdateCita} >Modificar cita</button>
      </div>
      
    </div>
  );
}
