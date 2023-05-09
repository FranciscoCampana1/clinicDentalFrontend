import React, { useEffect, useState } from "react";
import "./Citas.scss";
import { DataListTable } from "../../components";
import citaService from "../../_services/citaService";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function citas() {
  const [cita, setCita] = useState([]);
  // const [isOdontologoIdCita, setIsOdontologoIdCita] = useState([])
  // const [dataTableIdHeader, setDataTableIdHeader] = useState("")
  // const [dataTableIdAtt, setDataTableIdAtt] = useState("")
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const isLoggedIn = authState.isLoggedIn;

  const isOdontologo = authState.userInfo.role == "odontologo";
  const isPatient = authState.userInfo.role == "user";

  useEffect(() => {
    if (isLoggedIn && isPatient) {
      getCitasPaciente(authState.userToken);
      // setDataTableIdHeader("ID odontologo")
      // setDataTableIdAtt("id_odontologo")
    } else if (isLoggedIn && isOdontologo) {
      getCitasOdontologos(authState.userToken);
      // setDataTableIdHeader("ID paciente")
      // setDataTableIdAtt("id_paciente")
    } else {
      navigate("");
    }
  }, []);

  const handleCitas = (e) => {
    const { dataId } = e.currentTarget.dataset;
    console.log(dataId);
  };

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

  return (
    <div className="container cita">


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
      
    </div>
  );
}
