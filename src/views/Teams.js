import React from "react";
import TeamTiles from "../components/OurTeams/TeamTiles";
import Shivam from "../assets/team/shivam_fc.jpg";
import Punit from "../assets/team/PUNIT_MPR.jpg";
import Gaurav from "../assets/team/GAURAV_CND.jpeg";
import Ayush from "../assets/team/Ayush_Agrawal_flagship.jpg";
import Athul from "../assets/team/ATHUL_MPR.jpg";
import Deepanshu from "../assets/team/Deepanshu_workshop.jpg";
import Anushka from "../assets/team/AnushkaPandey_MarketingAndSponsorship.jpg";
import Aarav from "../assets/team/Aarav_Arya_mpr.jpg";
import Aditya from "../assets/team/Aditya_Kumar_Singh_web.jpg";
import Chanya from "../assets/team/Chanya_Sardana_flagship.jpg";
import Chetan from "../assets/team/chetan_kumar_registration.jpg";
import Farhaan from "../assets/team/farhaan_cnd.jpeg";
import Harsha from "../assets/team/Harsha_Dasari_flagship.jpg";
import Kanishk from "../assets/team/Kanishk_Giri_mpr.jpg";
import Kritish from "../assets/team/Kritish Kumar_hospitality.jpg";
import Kushagra from "../assets/team/Kushagra_Yadav_mpr.jpg";
import Piyush from "../assets/team/Piyush_Gautam_hospitality.jpg";
import Prajyot from "../assets/team/Prajyot R. - Prajyot Ramteke.png";
import Prashanth from "../assets/team/Prashanth_mpr.jpg";
import Priyanshi from "../assets/team/Priyanshi_Singh_flagship.jpg";
import Rohit from "../assets/team/ROHIT_NAYAK_events.jpg";
import Shresth from "../assets/team/Shresth_Verma_workshop.jpg";
import Spandan from "../assets/team/Spandan_Prasad_registration.jpg";
import Srinithya from "../assets/team/srinithya_chethi_reddy_events.jpg";
import Vikash from "../assets/team/Vikash_kumar_Rai_hospitality.jpg";
import Yash from "../assets/team/Yash_cnd.jpeg";
import Pratyush from "../assets/team/Pratyush_web.jpg";
import Chirag from "../assets/team/Chirag_flagship.jpg";

function Teams() {
  return (
    <>
      <h1 className="header team-header">Our Team</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <div>
            <h2 className="team-subheader">Fest Coordinator</h2>
            <ul className="cards__items fc">
              <TeamTiles names={[{ text: "Shivam Yadav", src: Shivam }]} />
            </ul>
          </div>
          <div>
            <h2 className="team-subheader">Marketing and Sponsorship</h2>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Anushka Pandey", src: Anushka },
                  { text: "Kushagra Yadav", src: Kushagra },
                  { text: "T. Prashanth", src: Prashanth },
                ]}
              />
            </ul>
          </div>
          <div>
            <h2 className="team-subheader">Media and Public Relations</h2>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Punit Jain", src: Punit },
                  { text: "Athul Krishna", src: Athul },
                ]}
              />
            </ul>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Kanish Giri", src: Kanishk },
                  { text: "Aarav Arya", src: Aarav },
                ]}
              />
            </ul>
          </div>
          <div>
            <h2 className="team-subheader">Dev Team</h2>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Aditya Kumar Singh", src: Aditya },
                  { text: "Pratyush Kumar", src: Pratyush },
                ]}
              />
            </ul>
          </div>
          <div>
            <h2 className="team-subheader">Registration</h2>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Chetan Kumar", src: Chetan },
                  { text: "Spandan Prasad", src: Spandan },
                ]}
              />
            </ul>
          </div>
          <div>
            <h2 className="team-subheader">Creatives</h2>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Gaurav", src: Gaurav },
                  { text: "Ramateke Prajyot Anil", src: Prajyot },
                ]}
              />
            </ul>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Farhaan Alam", src: Farhaan },
                  { text: "Yash Ajitsaria", src: Yash },
                ]}
              />
            </ul>
          </div>
          <div>
            <h2 className="team-subheader">Hospitality and Logistics</h2>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Kritish Kumar", src: Kritish },
                  { text: "Vikash Kumar Rai", src: Vikash },
                  { text: "Piyush Gautam", src: Piyush },
                ]}
              />
            </ul>
          </div>
          <div>
            <h2 className="team-subheader">Flagship Events</h2>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Ayush Agrawal", src: Ayush },
                  { text: "Priyanshi Singh", src: Priyanshi },
                  { text: "Chirag Bharadwaj", src: Chirag },
                ]}
              />
            </ul>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Chanya", src: Chanya },
                  { text: "Dasari Harsha Vardhan", src: Harsha },
                ]}
              />
            </ul>
          </div>
          <div>
            <h2 className="team-subheader">
              Workshop, Exhibition and Operations
            </h2>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Deepanshu", src: Deepanshu },
                  { text: "Shresth Verma", src: Shresth },
                ]}
              />
            </ul>
          </div>
          <div>
            <h2 className="team-subheader">Events & Guest Lectures</h2>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Chethi Reddy Srinithya", src: Srinithya },
                  { text: "Rohit Nayak", src: Rohit },
                ]}
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
  //   return <div>hello</div>;
}

export default Teams;
