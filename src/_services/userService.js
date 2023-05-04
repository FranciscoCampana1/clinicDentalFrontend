import axios from "axios";
import { global } from "../_global/global";

const userService = {}

userService.getAllUsers = async (token) =>{
    const config = {
        headers: {
            Autorization: `Bearer${token}`
        },
    };
    return (await axios.get(global.BASE_URL + `/usuarios`, config)).data
}
 
  

export default userService;