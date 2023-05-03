import React, { useEffect, useState } from "react";
import authService from "../../_services/authService";
import tokenStorageService from "../../_services/tokenStorage";
import {updateAuthStoreStateLogin} from "../users/updateAuthState";

export default function Login() {
  const initialFormValues = {
    email: "juana@juana.com",
    password: "12345678",
  };

  // HOOKS
  const [formValues, setFormValues] = useState(initialFormValues);

  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    //
  }, []);

  // HANDLERS
  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      email: formValues.email,
      password: formValues.password,
    };
    login(credentials);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormValues({
      ...formValues,
      [name]: value, //key: value
    });
  };

  // FUNCTIONS
  const login = async (credentials) => {
    try {
      const response = await authService.login(credentials);
      console.log(response);
      const token = response.token;
      tokenStorageService.save(token);
      setLoginError(null);
      updateAuthStoreStateLogin(token);
    } catch (error) {
      console.log(error);
      setLoginError(error.response.data.message);// preguntar en que sitio del backend localizo el msg de error
    }
  };

  // RETURN
  return (
    <div>
      <h1>Login</h1>
      <pre style={{ textAlign: "left", width: "250px", margin: "auto" }}>
        {JSON.stringify(formValues, null, 2)}
      </pre>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="">Email</label> <br />
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">Password</label> <br />
        <input
          type="text"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button>Send</button>
      </form>

      {/* <button onClick={() => {
        updateAuthStoreStateLogout()
      }}>Loguout</button> */}
      <br />
      {loginError && <p style={{ color: "red" }}>{loginError}</p>}
    </div>
  );
}