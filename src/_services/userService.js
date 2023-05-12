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

userService.updateProfile = async (token, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const body = {
    nombre: data.nombre,
    apellidos: data.apellidos,
    edad: data.edad,
    email: data.email,
    fecha_de_nacimiento: data.fecha_de_nacimiento,
    telefono: data.telefono,
    password: data.password,
  };


  return (await axios.put(global.BASE_URL + `/usuarios/updateprofile`, body, config))
    .data;
}



export default userService;
