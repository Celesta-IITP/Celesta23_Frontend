import React from "react";
import "../App.css";
import Cards from "../components/Cards/Cards.js";
import Footer from "../components/Footer/Footer";
import BackgroundContainer from "../components/BackgroundContainer/BackgroundContainer.js";
import About from "../components/About/About";
import DawnImage from "../assets/dawn_img.png";
import Image from "../components/ImageContainer/Image";

function Home() {
  return (
    <>
      <BackgroundContainer />
      <About />
      <Image location={DawnImage} />
      <Footer />
    </>
  );
}

export default Home;
