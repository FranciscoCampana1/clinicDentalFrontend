import { decodeToken } from "react-jwt";
import { store } from "../../app/store";
import { setIsLoggedIn, setToken, setUserInfo } from "./authSlice";

export const updateAuthStoreStateLogin = (token) => {
  const myDecodedToken = decodeToken(token);

  // dispatch
  store.dispatch(setIsLoggedIn(true));
  store.dispatch(
    setUserInfo({
      id: myDecodedToken.usuario_id, //chequear si userId tiene que ser igual que en el backend
      name: myDecodedToken.usuario_name,
      role: myDecodedToken.usuario_role,
    })
  );
  store.dispatch(setToken(token));
};

export const updateAuthStoreStateLogout = () => {
  // dispatch
  store.dispatch(setIsLoggedIn(false));
  store.dispatch(
    setUserInfo({
      id: "",
      name: "",
      role: "",
    })
  );
  store.dispatch(setToken(""));
};
