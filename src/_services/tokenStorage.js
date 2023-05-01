import { global } from "../_global/global";


const tokenService = {}

tokenService.save = (token) =>{
    sessionStorage.removeItem(global.TOKEN_KEY)
    sessionStorage.setItem(global.TOKEN_KEY, token)
}

tokenService.get = () => sessionStorage.getItem(global.TOKEN_KEY)

tokenService.logout = () => sessionStorage.clear()

export default tokenService