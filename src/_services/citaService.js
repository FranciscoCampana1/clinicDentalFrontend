import axios from "axios";
import { global } from "../_global/global";

const citaService = {};

citaService.getCitasPaciente = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (await axios.get(global.BASE_URL + `/citas/cita`, config)).data;
};

citaService.getCitasOdontologo = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (await axios.get(global.BASE_URL + `/citas/cita/odontologo`, config))
    .data;
};

citaService.createCita = async (token, data) =>{
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const body = {
    id_odontologo: data.id_odontologo,
    fecha: data.fecha,
    horario: data.horario
  }
  return (await axios.post(global.BASE_URL + `/citas/createcita`, body, config))
    .data;
}

citaService.updateCita = async (token, data, idCita) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const body = {
    fecha: data.fecha,
    horario: data.horario,
  };
  return (
    await axios.put(
      global.BASE_URL + `/citas/updatecita/${idCita}`,
      body,
      config
    )
  ).data;
};

citaService.deleteCita = async (token, idCita) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (
    await axios.delete(global.BASE_URL + `/citas/deletecita/${idCita}`, config)
  ).data;
};

export default citaService;
