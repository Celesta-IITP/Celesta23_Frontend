import { React, useEffect, useState, useRef } from "react";
import "../App.css";
import Footer from "../components/Footer/Footer";
import BackgroundContainer from "../components/BackgroundContainer/BackgroundContainer.js";
import DawnImage from "../assets/dawn_img.png";
import DawnImageWeb from "../assets/dawn_img_web.png";
import ChrysalisWeb from "../assets/chrysalis_web.png";
import Image from "../components/ImageContainer/Image";

import Description from "../components/Description/Description";
import ThemeVideo from "../components/ThemeVideo/ThemeVideo";
import Chrysalis from "../components/Chrysalis/Chrysalis";
import OurPartners from "../components/OurPartners/OurPartners";
import TilesContainer from "../components/Tiles/TilesContainer";
import CampAm from "../components/CampAm/CampAm";
import Navbar from "../components/Nav/Navbar";
import { Link } from "react-router-dom";

function Popup({ setPopupVisible }) {
    return (
        <>
            <div className="popup-main">
                <div className="popup-title">
                    <h2>CRYPTECH</h2>
                    <svg onClick={() => setPopupVisible(false)} className="hamburger menu-icon-button" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </div>
                <div className="popup-content">{"Let the battle of minds begin.\n\nGet ready to push your intellect to the limit and have a shot at prizes worth ₹1,00,000"}</div>
                <Link className="popup-button" to="/cryptech">Register Now</Link>
            </div>
        </>
    );
}

function Home() {
    const [popupVisible, setPopupVisible] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 767;

  const options = { threshold: 0.1 };

  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    const appearOnScroll = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("appear");
      });
    }, options);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });

    return () => {
      faders.forEach((fader) => {
        appearOnScroll.unobserve(fader);
      });
    };
  }, [options]);

  const campAmb = useRef();

  return (
    <>
      <Navbar />
      {popupVisible && <Popup setPopupVisible={setPopupVisible}/>}
      <BackgroundContainer />
      <Description
        heading="About"
        content="Celesta is the annual Techno-Management Fest of IIT Patna.
       To promote technical and managerial enthusiasm amongst young and bright minds of our nation and 
       to provide a platform to transform their innovative ideas into a meaningful reality."
      />

      <Image location={isMobile ? DawnImage : DawnImageWeb} />

      <Description
        heading="Theme"
        content="Chrysalis dawn: Soaring of the Colossus Emerge from the dead lockdown phase to an ever
         amazing offline fiesta that is going to increase your adrenaline rush for sure!"
      />
      {isMobile ? (
        <>
          <div className="celesta-text fade-in">
            <div className="celesta-glow-container">
              <h3 className="celesta-glow glow1">celesta</h3>
              <h3 className="celesta-glow glow2">celesta</h3>
              <h3 className="celesta-glow glow3">celesta</h3>
              <h3 className="celesta-glow glow4">celesta</h3>
            </div>
            <h2 className="celesta celesta-cut">Celesta</h2>
          </div>
          <div className="celesta-text fade-in">
            <h1 className="celesta-logo-header">Celesta</h1>
            <div className="celesta-logo-top">
              <span className="celesta-top top1">chrysalis</span>
              <span className="celesta-top">dawn</span>
            </div>
          </div>
        </>
      ) : (
        <Image location={ChrysalisWeb} />
      )}
      <ThemeVideo />
      {!isMobile && (
        <>
          <div className="celesta-text fade-in">
            <h1 className="celesta-logo-header">Celesta</h1>
            <div className="celesta-logo-top">
              <span className="celesta-top top1">chrysalis</span>
              <span className="celesta-top">dawn</span>
            </div>
          </div>
          
        </>
      )}

      <CampAm ref={campAmb} />
      {!isMobile && <TilesContainer />}
      <Chrysalis isMobile={isMobile} />

      {isMobile && <TilesContainer />}
      <OurPartners />
      <Footer ref={campAmb} />
    </>
  );
}

export default Home;
