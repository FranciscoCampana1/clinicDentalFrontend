import React, { useEffect, useState } from "react";
import authService from "../../_services/authService";
import { updateAuthStoreStateLogin } from "../../features/authentication/updateAuthState";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import './Login.scss'

export default function Login() {
   

   // hooks
   const navigate = useNavigate();
   const [formValues, setFormValues] = useState({});
   const [loginError, setLoginError] = useState(null);
   const authState = useSelector((state) => state.auth);

   const isAdmin = authState.userInfo.role == "admin";

   useEffect(() => {
      if (authState.userToken) {
         isAdmin ? navigate("/admin") : navigate("/");
      }
   }, [authState.userToken]);

   // handlers
   const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      email: formValues.email,
      password: formValues.password,
    };
    // login(credentials);
    if (
      validator.isEmail(credentials.email) &&
      validator.isByteLength(credentials.password, { min: 8, max: undefined })
    ) {
      login(credentials);
    } else if (!validator.isEmail(credentials.email)) {
      setLoginError("Debes introducir un correo real");
    } else if (
      !validator.isByteLength(credentials.password, { min: 8, max: undefined })
    ) {
      setLoginError("La contraseña debe contener mínimo 8 caracteres");
    }
  };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
         ...formValues,
         [name]: value, // key: value
      });
   };

   const login = async (credentials) => {
      try {
         const response = await authService.login(credentials);
         console.log(response);
         const token = response.token;
         setLoginError(null);
         updateAuthStoreStateLogin(token);
      } catch (error) {
         console.log(error);
         setLoginError(error.response.data.message);
      }
   };

   return (
      <div className="contenedor-login">
         <h1>Login</h1>
         <form noValidate onSubmit={handleSubmit}>
            <label htmlFor="">Email</label> <br />
            <input
               type="email"
               name="email"
               value={formValues.email}
               onChange={handleChange}
            />{" "}
            <br />
            <label htmlFor="">Password</label> <br />
            <input
               type="password"
               name="password"
               value={formValues.password}
               onChange={handleChange}
            />{" "}
            <br />
            <br />
            <button className="button">Send</button>
         </form>
         <br />
         {loginError && <p style={{ color: "red" }}>{loginError}</p>}
      </div>
   );
}
