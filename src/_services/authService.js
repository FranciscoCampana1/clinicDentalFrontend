import axios from "axios";
import { global } from "../_global/global";

const authService = {};

//Login de usuarios
authService.login = async (credentials) => {
  const body = {
    email: credentials.email,
    password: credentials.password,
  };

  return (await axios.post(global.BASE_URL + "/auth/login", body)).data;
};

//registro de usuarios
authService.registerUser = async (data) => {

  const body = {
    nombre: data.nombre,
    apellidos: data.apellidos,
    edad: data.edad,
    email: data.email,
    fecha_de_nacimiento: data.fecha_de_nacimiento,
    telefono: data.telefono,
    password: data.password,
  };


  return (await axios.post(global.BASE_URL + `/auth/register/`, body))
    .data;
}


export default authService