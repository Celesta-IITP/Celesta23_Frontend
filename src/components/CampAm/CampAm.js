import { React, useEffect, useState } from "react";
import Campab from "../../assets/Campab/Campab.png";
import Campab_mobile from "../../assets/Campab/Campab_mobile.png";
import "./CampAm.css";

function CampAb() {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 767;
  return (
    <>
      <div className="CampAb_bg fade-in">
        <div className="CampAb_Image">
          <img
            src={window.innerWidth <= 767 ? Campab_mobile : Campab}
            alt="CA"
            className="Image"
          />
        </div>

        <h1 className="CampAb_Header">CAMPUS AMBASSADOR</h1>
        <p className="CampAb_Desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          eum voluptas obcaecati velit fugiat quis adipisci cum tempora dolores
          nemo, qui tenetur! Sit ratione nulla, soluta perspiciatis cupiditate
          eius amet.
        </p>
        {/*<button className="button">Leaderboard</button>*/}
      </div>
    </>
  );
}

export default CampAb;
