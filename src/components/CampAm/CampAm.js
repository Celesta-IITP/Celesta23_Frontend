import { forwardRef, React, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Campab from "../../assets/Campab/Campab.png";
import Campab_mobile from "../../assets/Campab/Campab_mobile.png";
import Leaderboard from "../Leaderboard/Leaderboard";
import "./CampAm.css";

const CampAb = forwardRef((props, ref) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const isMobile = width <= 700;
  const animate = () =>{
    console.log("gug")
    let modal=document.getElementById("showLeaderboard");
    let overlay=document.getElementById("leader-overlay");
    overlay.classList.add("closeLeadOverlay");
    modal.classList.add("closeLeadModal");
    setTimeout(removeAnime, 300);
    
  }
  const removeAnime = () =>{
    
    
    setShowLeaderboard(false);
  }
  return (
    <>
      <div className="CampAb_bg fade-in" ref={ref}>
        <div className="CampAb_Image">
          <LazyLoadImage
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

        <div className="Leaderboard" onClick={() => setShowLeaderboard(true)}>
          Leaderboard
          <button className="Leaderboardbutton">➔</button>
          <div className="whiteline"></div>
        </div>
      </div>
      {showLeaderboard && (
        <>
          <div
            className="leader-overlay"
            id="leader-overlay"
            onClick={animate}
          >
          </div>
          <div className="showLeaderboard" id="showLeaderboard">
          <div className="LeadercloseButton">
              <button className="Leaderclosebutton" onClick={animate}>
                ✖
              </button>
            </div>
            <div className="LeaderHead">
            {/*<button className="Leaderclosebutton">
                ✖
      </button>*/}
              <h2 className="leader-header">Leaderboard</h2>
            </div>
            <Leaderboard />
          </div>
        </>
      )}
    </>
  );
});

export default CampAb;
