import React from "react";
import ChrysalisWeb from "../../assets/chrysalis/chrysalis_butterfly_web.png";
import ChrysalisMobile from "../../assets/chrysalis/chrysalis_butterfly.png";
import "./Chrysalis.css";

function Chrysalis({ isMobile }) {
  return (
    <div className="chrysalis-container">
      <div className="image-container">
        <img
          src={isMobile ? ChrysalisMobile : ChrysalisWeb}
          className="image"
        ></img>
      </div>
      <div className="chrysalis-text">
        Spontaneity <br />
        is Good
      </div>
    </div>
  );
}

export default Chrysalis;