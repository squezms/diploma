import React from "react";
import SectionOne from "../../components/section-one/SectionOne";
import SectionTwo from "../../components/section-two/SectionTwo";
import "./Home.css";

function Home() {
  return (
    <div className="background">
      <div className="container">
        <SectionOne />
        <SectionTwo />
      </div>
    </div>
  );
}

export default Home;
