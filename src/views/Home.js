import React from "react";
import "../App.css";
import Footer from "../components/Footer/Footer";
import BackgroundContainer from "../components/BackgroundContainer/BackgroundContainer.js";
import DawnImage from "../assets/dawn_img.png";
import Image from "../components/ImageContainer/Image";
import Description from "../components/Description/Description";

function Home() {
  return (
    <>
      <BackgroundContainer />
      <Description heading="About" content="lorem30" />
      <Image location={DawnImage} />
      <Description heading="Theme" content="lorem30" />
      {/* <div className="celesta-text">
        <span className="celesta-top">Chrysalis____Dawn</span>
        <h2 className="celesta celesta-dawn">Celesta</h2>
      </div> */}
      <Footer />
    </>
  );
}

export default Home;
