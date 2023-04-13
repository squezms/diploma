import "./Sneaker.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Sneaker() {
  const [sneakers, setSneakers] = useState({});
  const fetchImage = async () => {
    const res = await axios.get("http://localhost:4005/sneaker/");

    const data = await res.data;

    console.log(data);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return <div className="images">Images</div>;
}

export default Sneaker;
