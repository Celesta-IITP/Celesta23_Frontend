import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Background.css";
import WebBackground from "../../assets/landing/bg_web1.png";
import WebLogo from "../../assets/landing/logo_landing_web.png";

function BackgroundContainer() {
  const screenSize = window.innerWidth;
  // console.log(screenSize);
  return (
    <>
      <div className="landing-container fade-in">
        {screenSize > 426 && (
          <>
            <div className="background-container">
              <img
                src={WebBackground}
                className="web-background"
                alt="landing-background"
              ></img>
            </div>
            <div className="logo-container">
              <img src={WebLogo} className="web-logo" alt="landing-title"></img>
            </div>
          </>
        )}
      </div>
      <div className="landing-btns">
        <Link to="/events" className="landing-links">
          Events
        </Link>
        <a
          href="https://forms.gle/UZx9ejCQHnxX2wJbA"
          target={"_blank"}
          className="landing-links"
        >
          Register
        </a>
      </div>
    </>
  );
}

export default BackgroundContainer;
