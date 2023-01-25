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
import GardaPatna from "../../assets/Partners/GardaPatna.png";
import ItHappensinBihar from "../../assets/Partners/ItHappensinBihar.png";
import PatnaBeats from "../../assets/Partners/PatnaBeats.png";
import Patnaites from "../../assets/Partners/Patnaites.png";
import RoboticsIndia from "../../assets/Partners/RoboticsIndia.png";
import StoriesOfBihar from "../../assets/Partners/StoriesOfBihar.png";
import SybyllineRobotics from "../../assets/Partners/SybyllineRobotics.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function OurPartners() {
const [KeySponsors, setKeySponsors] = useState([
  {
    name: "JK Tyres",
    logo: JKTyres,
    website: "https://www.jktyre.com/"
  },
  {
    name: "Bihar Rajya Pul Nirman Nigam Limited",
    logo: PulNirman,
    website: "http://brpnnl.bihar.gov.in/"
  }
]);

const [GroomingPartner, setGroomingPartner] = useState([
  {
    name: "Beardo",
    logo: Beardo,
    website: "https://beardo.in/"
  }
]);

const [GatePartner, setGatePartner] = useState([
  {
    name: "I.E.S Master",
    logo: IESMaster,
    website: "https://iesmaster.org/"
  }
]);

const [InsurancePartner, setInsurancePartner] = useState([
  {
    name: "Life Insurance Corporation of India",
    logo: LIC,
    website: "https://licindia.in/"
  }
])

const [StrategicSponsors, setStrategicSponsors] = useState([
  {
    name: "UltraTech Cement",
    logo: UltraTech,
    website: "https://www.ultratechcement.com/"
  },
  {
    name: "Beltron",
    logo: Beltron,
    website: "https://bsedc.bihar.gov.in/"
  }
]);

const [WorkshopPartner, setWorkshopPartner] = useState([
  {
    name: "Techobyte",
    logo: Techobyte,
    website: "https://techobytes.com/"
  }
]);

const [ImplementationPartner, setImplementationPartner] = useState([
  {
    name: "Sybylline Robotics",
    logo: SybyllineRobotics,
    website: "" 
  },
]);

const [SocialMediaPartner, setSocialMediaPartner] = useState([
  {
    name: "Garda Patna",
    logo: GardaPatna,
    website: ""
  },
  {
    name: "It happens in Bihar",
    logo: ItHappensinBihar,
    website: ""
  },
  {
    name: "Patnaites",
    logo: Patnaites,
    website: "http://patnaites.com/"
  },
  {
    name: "Stories of Bihar",
    logo: StoriesOfBihar,
    website: ""
  }
]);

const [RoboticsMediaPartner, setRoboticsMediaPartner] = useState([
  {
    name: "Robotics India",
    logo: RoboticsIndia,
    website: "" 
  }
]);

const [MediaPartner, setMediaPartner] = useState([
  {
    name: "Patna Beats",
    logo: PatnaBeats,
    website: "https://www.patnabeats.com/" 
  }
]);

const Partners_Display = (subHead, PartnerDetails) => {
  return (
    <>
    <div className="subHead">{subHead}</div>
    <div className="OurPartners_Partners">
      {PartnerDetails.map((Partner) => {
        return (
          <>
            <div className="Partner">
            {(Partner.website!="")?
            <a href={Partner.website}
            target="_blank">
              <LazyLoadImage
              className="OurPartners_Partner"
              src={Partner.logo}
              alt={Partner.name}
            />
            </a>
            :
            <LazyLoadImage
              className="OurPartners_Partner"
              src={Partner.logo}
              alt={Partner.name}
            />}
            </div>

          </>
        );
      })}
    </div>
    </>
  );
};

  return (
    <>
      <div className="OurPartners_bg fade-in">
        
        <div className="PartnerHead">
          <h1 className="HeadBg"></h1>
          <h1 className="OurPartners_Head">OUR PARTNERS</h1>
        </div>
        {Partners_Display("Key Sponsors", KeySponsors)}
        {Partners_Display("Grooming Partner", GroomingPartner)}
        {Partners_Display("GATE Partner", GatePartner)}
        {Partners_Display("Strategic Sponsors", StrategicSponsors)}
        {Partners_Display("Workshop Partner", WorkshopPartner)}
        {Partners_Display("Insurance Partner", InsurancePartner)}
        {Partners_Display("Implementation Partner", ImplementationPartner)}
        {Partners_Display("Social Media Partners", SocialMediaPartner)}
        {Partners_Display("Media Partner", MediaPartner)}
        {Partners_Display("Robotics Media Partner", RoboticsMediaPartner)}
      </div>
    </>
  );
}

export default OurPartners;
