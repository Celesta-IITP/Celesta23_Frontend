import React from "react";
import { useState, useEffect, useMemo } from "react";
import "./OurPartners.css";
import Beltron from "../../assets/Partners/BeltronLogo.png";
import Beardo from "../../assets/Partners/beardo_logo_black.png";
import JKTyres from "../../assets/Partners/J K Logo ver.png";
import LIC from "../../assets/Partners/LIC-Logo.png";
import IESMaster from "../../assets/Partners/LogoM-0.png";
import PulNirman from "../../assets/Partners/PulNirman.png";
import UltraTech from "../../assets/Partners/UltraTech-Cement-Logo.png";
import Techobyte from "../../assets/Partners/Techobyte.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function OurPartners() {
  const [PartnerDetails, setPartnerDetails] = useState([{
    name: "Beltron",
    logo: Beltron,
    website: "https://bsedc.bihar.gov.in/"
  },
  {
    name: "Beardo",
    logo: Beardo,
    website: "https://beardo.in/"
  },
  {
    name: "JK Tyres",
    logo: JKTyres,
    website: "https://www.jktyre.com/"
  },
  {
    name: "I.E.S Master",
    logo: IESMaster,
    website: "https://iesmaster.org/"
  },
  {
    name: "Bihar Rajya Pul Nirman Nigam Limited",
    logo: PulNirman,
    website: "http://brpnnl.bihar.gov.in/"
  },
  {
    name: "UltraTech Cement",
    logo: UltraTech,
    website: "https://www.ultratechcement.com/"
  },
  {
    name: "Life Insurance Corporation of India",
    logo: LIC,
    website: "https://licindia.in/"
  },
  {
    name: "Techobyte",
    logo: Techobyte,
    website: "https://techobytes.com/"
  }
]);

const Partners_Display = (PartnerDetails) => {
  return (
    <div className="OurPartners_Partners">
      {PartnerDetails.map((Partner) => {
        return (
          <>
            <div className="Partner">
            <a href={Partner.website}
            target="_blank">
              <LazyLoadImage
              className="OurPartners_Partner"
              src={Partner.logo}
              alt={Partner.name}
            />
            </a>
          </div>
          </>
        );
      })}
    </div>
  );
};

  return (
    <>
      <div className="OurPartners_bg fade-in">
        
        <div className="PartnerHead">
          <h1 className="HeadBg"></h1>
          <h1 className="OurPartners_Head">OUR PARTNERS</h1>
        </div>
        {Partners_Display(PartnerDetails)}
        
      </div>
    </>
  );
}

export default OurPartners;
