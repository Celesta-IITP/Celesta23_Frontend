import React from "react";
import "./Image.css";

function Image({ location }) {
  return (
    <div className="container">
      <img src={location} className="img"></img>
    </div>
  );
}

export default Image;
