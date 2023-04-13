import "./Filter.css";
import Buttons from "./buttons/Buttons";
import { FaChevronRight } from "react-icons/fa";
import React from "react";

const Filter = ({ show, fn }) => {
  const buttons = [
    { id: 1, name: "MEN" },
    { id: 2, name: "WOMEN" },
    { id: 3, name: "KID" },
  ];
  const sizes = [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
    { id: 6, name: "6" },
    { id: 7, name: "7" },
    { id: 8, name: "8" },
    { id: 9, name: "9" },
    { id: 10, name: "10" },
    { id: 11, name: "11" },
    { id: 12, name: "12" },
    { id: 13, name: "13" },
    { id: 14, name: "14" },
    { id: 15, name: "15" },
  ];

  return (
    <div className="showSide">
      <div className="show" onClick={() => fn()}>
        <h5>Show Filters</h5>
        <FaChevronRight className="rightIcon" />
      </div>

      {show ? (
        <div className="filter">
          <p>GENDER</p>
          <div className="gender">
            {buttons.map((button) => {
              return <Buttons key={button.id} name={button.name} />;
            })}
          </div>
          <p>SIZE</p>
          <div className="size">
            {sizes.map((button) => {
              return <Buttons key={button.id} name={button.name} />;
            })}
          </div>

          <button className="clear">Clear filter</button>
        </div>
      ) : null}
    </div>
  );
};

export default Filter;
