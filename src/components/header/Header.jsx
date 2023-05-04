import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
import { useSelector } from "react-redux";
import { updateAuthStoreStateLogout } from "../../features/authentication/updateAuthState";
import { MdPersonOutline, MdOutlineLogout, MdArrowDownward, MdLogin, MdHome, MdPlaylistAddCheck } from "react-icons/md";


export default function Header() {
  // HOOKS
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const isLoggedIn = authState.isLoggedIn;
  const { name, role } = authState.userInfo;
  const isAdmin = role == "admin";

  // HANDLERS
  const handleLogout = () => {
    updateAuthStoreStateLogout();
    navigate("/");
  };

  // RETURN
  return (
    <div className="Header">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/"><MdHome/> Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/citas"><MdPlaylistAddCheck/> Citas</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about">About</NavLink>
          </li>
          {isAdmin && (
            <>
              <li className="nav-item">
                <NavLink to="/admin">Admin</NavLink>
              </li>
            </>
          )}
        </ul>

        <ul className="navbar-nav">
          {!isLoggedIn && (
            <>
              <li className="nav-item">
                <NavLink to="/login"><MdLogin/> Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
          {isLoggedIn && (
            <>
              <li className="nav-item dropdown ">
                <a><MdPersonOutline className="icon"/> {name} <MdArrowDownward/> </a>

                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <NavLink to="/profile">Profile</NavLink>
                  </li>
                  <li className="dropdown-item">
                    <a onClick={handleLogout}><MdOutlineLogout className="icon"/>Logout</a>
                  </li>
                </ul>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}