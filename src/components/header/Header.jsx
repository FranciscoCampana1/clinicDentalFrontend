import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <div className="Header">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin">Admin</NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register">Register</NavLink>
          </li>
          <li className="nav-item dropdown">
            <a>User Name</a>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li className="dropdown-item">
                 <a>Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
