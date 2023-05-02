import { global } from "../_global/global";


const tokenStorageService = {}

tokenStorageService.save = (token) =>{
    sessionStorage.removeItem(global.TOKEN_KEY)
    sessionStorage.setItem(global.TOKEN_KEY, token)
}

tokenStorageService.get = () => sessionStorage.getItem(global.TOKEN_KEY)

tokenStorageService.logout = () => sessionStorage.clear()

export default tokenStorageService