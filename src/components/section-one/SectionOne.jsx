import React, { useState } from "react";
import Filter from "./filter/Filter";
import "./SectionOne.css";
function SectionOne() {
  const [click, setClick] = useState(false);

  const handleShow = () => {
    setClick(!click);
  };
  return (
    <div
      style={{ width: click ? "30%" : "10%" }}
      className="section-one-container"
    >
      <Filter show={click} fn={handleShow} />
    </div>
  );
}

export default SectionOne;
