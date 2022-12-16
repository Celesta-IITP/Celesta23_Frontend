import React from "react";
import "./Image.css";

function Image({ location }) {
  return (
    <div className="container fade-in">
      <img src={location} className="img" alt="images"></img>
    </div>
  );
}

export default Image;
