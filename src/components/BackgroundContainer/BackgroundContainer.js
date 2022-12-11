import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Background.css";
import WebBackground from "../../assets/landing/bg_web1.png";
import WebLogo from "../../assets/landing/logo_landing_web.png";

function BackgroundContainer() {
  const screenSize = window.innerWidth;
  return (
    <>
      <div className="landing-container">
        {screenSize > 426 && (
          <>
            <div className="background-container">
              <img src={WebBackground} className="web-background"></img>
            </div>
            <div className="logo-container">
              <img src={WebLogo} className="web-logo"></img>
            </div>
          </>
        )}
      </div>
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
