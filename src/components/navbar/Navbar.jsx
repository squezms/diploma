import React from "react";
import "./Navbar.css";
import Searchbar from "./searchbar/Searchbar";
import Menu from "./menu/Menu";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink className="logo" to={"/"}>
        LOGO
      </NavLink>
      <Searchbar />
      <div className="menu">
        <Menu name="Login" />
        <Menu name="Signup" />
        <Menu name="FAQ" />
      </div>
    </div>
  );
}

export default Navbar;
