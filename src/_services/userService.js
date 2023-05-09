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

export default userService;
