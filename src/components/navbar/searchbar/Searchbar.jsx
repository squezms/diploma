import React from "react";
import "./Searchbar.css";
import { FaSearch } from "react-icons/fa";

function Searchbar() {
  return (
    <div className="search">
      <div className="searchicon">
        <FaSearch />
      </div>
      <input className="searchbar" type="search" placeholder="Search here..." />
    </div>
  );
}

export default Searchbar;
