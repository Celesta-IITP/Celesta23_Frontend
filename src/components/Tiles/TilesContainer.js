import { React, useEffect } from "react";
import Tiles from "./Tiles";
import "./Tiles.css";
import DawnImage from "../../assets/dawn_img.png";
import ArrowHead from "../../assets/gallery/Vector.png";

function TilesContainer() {
  // const [show, setShow] = useState(false);
  let flag = false;

  useEffect(() => {
    if (localStorage.getItem("--variable-height") != null) {
      document
        .querySelector(":root")
        .style.setProperty(
          "--variable-height",
          localStorage.getItem("--variable-height")
        );
      return;
    }

    const container = document.getElementsByClassName("tiles-container")[0];
    // const container = useRef(null);
    // console.log(container);
    const maxHeight = container.scrollHeight;
    console.log(maxHeight);
    document
      .querySelector(":root")
      .style.setProperty("--variable-height", maxHeight + "px");
    localStorage.setItem("--variable-height", maxHeight + "px");

    return () => {
      localStorage.removeItem("--variable-height");
    };
  }, []);

  function expandTiles(e) {
    const button = e.target;
    const container = document.getElementsByClassName("tiles-container")[0];
    button.classList.toggle("reverted");
    button.classList.toggle("normal");
    container.classList.toggle("height-container");
    // setShow(!show);
  }
  return (
    <>
      <div className="tiles-container fade-in">
        <Tiles
          image1={DawnImage}
          image2={DawnImage}
          image3={DawnImage}
          image4={DawnImage}
          style="style1"
        />
        <Tiles
          image1={DawnImage}
          image2={DawnImage}
          image3={DawnImage}
          image4={DawnImage}
          style="style2"
        />
        <Tiles
          image1={DawnImage}
          image2={DawnImage}
          image3={DawnImage}
          image4={DawnImage}
          style="style1"
        />
        <Tiles
          image1={DawnImage}
          image2={DawnImage}
          image3={DawnImage}
          style="style2"
        />
      </div>
      <div className="expand-btn fade-in" onClick={expandTiles}>
        <img src={ArrowHead} className="normal"></img>
      </div>
    </>
  );
}

export default TilesContainer;
