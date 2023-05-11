import axios from "axios";
import { global } from "../_global/global";

const userService = {};

userService.getAllUsers = async (token, page = 1) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return (await axios.get(global.BASE_URL + `/usuarios?page=${page}`, config))
      .data;
  };


userService.getProfile = async (token) =>{
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (await axios.get(global.BASE_URL + `/usuarios/getprofile`, config))
    .data;
}

userService.updateProfile = async (token, userData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const body = {
    nombre: userData.nombre,
    apellidos: userData.apellidos,
    edad: userData.edad,
    email: userData.email,
    fecha_de_nacimiento: userData.fecha_de_nacimiento,
    telefono: userData.telefono,
    password: userData.password,
  };


  return (await axios.put(global.BASE_URL + `/usuarios/updateprofile`, body, config))
    .data;
}



export default userService;
