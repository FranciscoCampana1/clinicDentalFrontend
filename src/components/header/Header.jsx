import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"

export default function Header() {
  return <>
  <div className="Header">
    <nav>
        <div>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
        </div>
        <div>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link >Logout</Link>
        </div>
    </nav>
  </div>
  
  
  
  
  
  </>;
}
