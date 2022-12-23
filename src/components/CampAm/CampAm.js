import { React, useEffect, useState } from "react";
import Campab from "../../assets/Campab/Campab.png";
import Campab_mobile from "../../assets/Campab/Campab_mobile.png";
import "./CampAm.css";

function CampAb() {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 700;
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
        Take a lead role in spreading the words of the fest into your college side by side building your overall personality.
        </p>
        <div className="Leaderboard">Leaderboard
          <button className="Leaderboardbutton">➔</button>      
        </div>
        {/*<button className="button">Leaderboard</button>*/}
      </div>
    </>
  );
}

export default CampAb;
