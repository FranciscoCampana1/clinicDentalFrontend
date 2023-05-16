import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
import { useSelector } from "react-redux";
import { updateAuthStoreStateLogout } from "../../features/authentication/updateAuthState";
import {
  MdPersonOutline,
  MdOutlineLogout,
  MdOutlineLogin,
  MdKeyboardArrowDown,
} from "react-icons/md";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Header() {
  // hooks
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const isLoggedIn = authState.isLoggedIn;
  const { name, role } = authState.userInfo;
  const isAdmin = role == "admin";

  // handlers
  const handleLogout = () => {
    updateAuthStoreStateLogout();
    navigate("/");
  };

  return (
    <div className="Header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink className="nav-link text-white" to="/">
            <img src="../../../images/logo-all-smiles.jpg" alt="imagen-logo"  className="logo" />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {isLoggedIn && !isAdmin && (
                <NavLink className="nav-link" to="/citas">
                  Citas
                </NavLink>
              )}
              {isAdmin && (
                <NavLink className="nav-link" to="/admin">
                  Admin
                </NavLink>
              )}
            </Nav>
            {!isLoggedIn && (
              <Nav>
                <NavLink className="nav-link" to="/login">
                  <MdOutlineLogin /> Iniciar sesion
                </NavLink>
                <NavLink className="nav-link" to="/register">
                  Registrarse
                </NavLink>
              </Nav>
            )}
            {isLoggedIn && (
              <Nav>
                <NavDropdown title={name} id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/profile">
                    <MdPersonOutline /> Perfil
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>
                    <MdOutlineLogout /> Cerrar sesión
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
