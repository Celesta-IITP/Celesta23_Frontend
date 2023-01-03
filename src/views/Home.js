import { React, useEffect, useState } from "react";
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
import TilesContainer from "../components/Tiles/TilesContainer";
import CampAm from "../components/CampAm/CampAm";
import OurPartners from "../components/OurPartners/OurPartners";


function Home() {
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

  return (
    <>
      <BackgroundContainer />
      <Description heading="About" content="Celesta is the annual Techno-Management Fest of IIT Patna.
       To promote technical and managerial enthusiasm amongst young and bright minds of our nation and 
       to provide a platform to transform their innovative ideas into a meaningful reality." />
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
          <TilesContainer />
        </>
      )}
      <CampAm />
      <Chrysalis isMobile={isMobile} />
      {isMobile && <TilesContainer />}
      {/*<OurPartners />*/}
      <Footer />
    </>
  );
}

export default Home;
