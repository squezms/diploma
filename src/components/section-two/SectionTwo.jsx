import React from "react";
import "./SectionTwo.css";
import Dropdown from "./drop-down/Dropdown";
import Sneaker from "./snearkers/Sneaker";

function SectionTwo() {
  return (
    <div className="container">
      <div className="dropdown">
        <Dropdown />
      </div>
      <div className="sneakers">
        <Sneaker />
      </div>
    </div>
  );
}

export default SectionTwo;
