import axios from "axios";
import { global } from "../_global/global";

const citaService = {};

citaService.getCitasPaciente = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return (await axios.get(global.BASE_URL + `/citas/cita`, config))
      .data;
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

  export default citaService