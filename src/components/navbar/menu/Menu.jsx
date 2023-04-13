import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

function menu({ name }) {
  return (
    <div className="menu">
      <NavLink to={name} className="menu1">
        {name}
      </NavLink>
    </div>
  );
}

export default menu;
