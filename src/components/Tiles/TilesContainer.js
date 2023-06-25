import { React } from "react";
import Tiles from "./Tiles";
import "./Tiles.css";
import ArrowHead from "../../assets/gallery/Vector.png";
import Picture1 from "../../assets/gallery/ha1.jpg";
import Picture2 from "../../assets/gallery/ha2.jpg";
import Picture3 from "../../assets/gallery/ha3.jpg";
import Picture4 from "../../assets/gallery/ha4.jpg";
import Picture5 from "../../assets/gallery/ha5.jpg";
import Picture6 from "../../assets/gallery/ha6.jpg";
import Picture7 from "../../assets/gallery/ha7.jpg";
import Picture8 from "../../assets/gallery/ha8.jpg";
import Picture9 from "../../assets/gallery/ha9.jpg";
import Picture10 from "../../assets/gallery/ha10.jpg";
import Picture11 from "../../assets/gallery/ha11.jpg";
import Picture12 from "../../assets/gallery/ha12.jpg";
import Picture13 from "../../assets/gallery/ha13.jpg";
import Picture14 from "../../assets/gallery/ha14.jpg";
import Picture15 from "../../assets/gallery/ha15.jpg";
import Picture16 from "../../assets/gallery/ha16.jpg";
// import Picture17 from "../../assets/gallery/ha17.jpg";
// import Picture18 from "../../assets/gallery/ha18.jpg";
// import Picture19 from "../../assets/gallery/ha19.jpg";
// import Picture20 from "../../assets/gallery/ha20.jpg";

// IMPORTANT : DO NOT TOUCH THIS CODE IT JUST WORKS
function TilesContainer() {
  function expandTiles(e) {
    const button = e.target;
    const container = document.getElementsByClassName("tiles-container")[0];
    const maxHeight = `${container.scrollHeight}px`;
    // console.log(container);
    // console.log(maxHeight);
    document.documentElement.style.setProperty("--variable-height", maxHeight);
    button.classList.toggle("reverted");
    button.classList.toggle("normal");
    container.classList.toggle("height-container");
  }

  return (
    <>
      <div className="tiles-container fade-in">
        <Tiles
          image1={Picture1}
          image2={Picture2}
          image3={Picture3}
          image4={Picture4}
          style="style1"
        />
        <Tiles
          image1={Picture5}
          image2={Picture6}
          image3={Picture7}
          image4={Picture8}
          style="style2"
        />
        <Tiles
          image1={Picture9}
          image2={Picture10}
          image3={Picture11}
          image4={Picture12}
          style="style1"
        />
        <Tiles
          image1={Picture13}
          image2={Picture14}
          image3={Picture15}
          image4={Picture16}
          style="style2"
        />
        {/* <Tiles
          image1={Picture17}
          image2={Picture18}
          image3={Picture19}
          image4={Picture20}
          style="style2"
        /> */}
      </div>
      <div className="expand-btn fade-in" onClick={expandTiles}>
        <img src={ArrowHead} className="normal" alt="arrowhead"></img>
      </div>
    </>
  );
}

export default TilesContainer;
