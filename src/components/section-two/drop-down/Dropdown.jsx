import React from "react";
import "./Dropdown.css";
function Dropdown() {
  return (
    <div className="main-dropdown">
      <form className="form">
        <label>Sort by : </label>
        <select className="sort">
          <option value="popular">Popular</option>
          <option value="Past">Past</option>
          <option value="price-high">Price(High-low)</option>
          <option value="price-low">Price(Low-high)</option>
        </select>
      </form>
    </div>
  );
}

export default Dropdown;
