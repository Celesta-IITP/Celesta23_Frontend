import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Background.css";

function BackgroundContainer() {
  return (
    <>
      <div className="landing-container"></div>
      <div className="landing-btns">
        <Link to="/events" className="landing-links">
          Events
        </Link>
        <Link to="/" className="landing-links">
          Register
        </Link>
      </div>
    </>
  );
}

export default BackgroundContainer;
