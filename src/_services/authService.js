import axios from "axios";
import { global } from "../_global/global";

const authService = {};

authService.login = async (credentials) => {
  const body = {
    email: credentials.email,
    password: credentials.password,
  };

  return (await axios.post(global.BASE_URL + "/auth/login", body)).data;
};

authService.registerUser = async (userData) => {

  const body = {
    nombre: userData.nombre,
    apellidos: userData.apellidos,
    edad: userData.edad,
    email: userData.email,
    fecha_de_nacimiento: userData.fecha_de_nacimiento,
    telefono: userData.telefono,
    password: userData.password,
  };


  return (await axios.post(global.BASE_URL + `/auth/register/`, body))
    .data;
}


export default authService