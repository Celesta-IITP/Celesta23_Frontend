import { React, useEffect, useState } from "react";
import Campab from "../../assets/Campab/Campab.png";
import Campab_mobile from "../../assets/Campab/Campab_mobile.png";
import "./CampAm.css";

function CampAb() {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 700;
  return (
    <>
      <div className="CampAb_bg fade-in" id="CA">
        <div className="CampAb_Image">
          <img
            src={window.innerWidth <= 767 ? Campab_mobile : Campab}
            alt="CA"
            className="Image"
          />
        </div>

        <h1 className="CampAb_Header">CAMPUS AMBASSADOR</h1>
        <p className="CampAb_Desc">
          The Campus Ambassador program is one of the leading publicity programs
          of Celesta. The promotion of the fest in the respective colleges is
          assigned to the campus ambassadors. They serve as the intermediaries
          who bridge the gap between their college and our campus i.e, as a
          nodal point for any kind of communication or promotion. Campus
          ambassadors act as the face of one of the biggest techno-management
          festival in the entire North-East India and are entrusted with the job
          of increasing the outreach of the fest through on field and social
          media publicity. The campus ambassadors are entitled to exciting
          prizes, apart from the coveted certificate and many other goodies.
        </p>
        <div className="Leaderboard">
          Leaderboard
          <button className="Leaderboardbutton">➔</button>
          <div className="whiteline"></div>
        </div>

        {/*<button className="button">Leaderboard</button>*/}
      </div>
    </>
  );
}

export default CampAb;
