import React from "react";
import TeamTiles from "../components/OurTeams/TeamTiles";

// fest cordinators
import Ayush from "../assets/team_23/Ayush_Pal_fc.jpg";
import Kirtan from "../assets/team_23/Kirtan_Jain_fc.jpg";

// marketting and spons
import Bhaskar from "../assets/team_23/Bhaskar_Mishra_spons.jpg";
import Mamta from "../assets/team_23/blank.png";
import Kshitij from "../assets/team_23/Kshitij_Chaudhary_spons.jpg";
import Rajnish from "../assets/team_23/Rajnish_Bhagat_spons.jpg";

//MPR
import Nishita from "../assets/team_23/Nishita_Lath_mpr.jpg";
import Ajay from "../assets/team_23/blank.png";
import Shrishti from "../assets/team_23/blank.png";
import Ajmeera from "../assets/team_23/blank.png";
import Aditi from "../assets/team_23/Aditi_Verma_mpr.jpg";

//dev
import Saif from "../assets/team_23/Saif_dev.jpg";
import Kartikay from "../assets/team_23/Kartikay_Saxena_web.jpeg";

//registration
import Shivam from "../assets/team_23/Shivam_Yadav_rsp.jpg";
import Khushi from "../assets/team_23/Khushi_Pathak_rsp.jpg";
import Ankur from "../assets/team_23/blank.png";

//creatives
import Mukund from "../assets/team_23/Mukund_Sharma_cnd.jpg";
import Suryansh from "../assets/team_23/Suryansh_cnd.png";
import Siddhant from "../assets/team_23/Siddhant_Senapati_cnd.jpg";
import Sahil from "../assets/team_23/Sahil_Agrawal_cnd.jpg";
import Vikramaditya from "../assets/team_23/blank.png";

//hospi and logistics
import Supratim from "../assets/team_23/Supratim_Das_hospi.jpeg";
import Harshita from "../assets/team_23/blank.png";
import Naveen from "../assets/team_23/Naveen_Kumar_hospi.jpg";
import Pranav from "../assets/team_23/Pranav_Raj_hospi.png";

//flagship
import Alisha from "../assets/team_23/Alisha_Singh_flagship.jpg";
import Vishesh from "../assets/team_23/blank.png";
import Surya from "../assets/team_23/blank.png";
import Harsh from "../assets/team_23/Harsh_Singh_flagship.png";
import Piyusha from "../assets/team_23/PIYUSHA_JHA_flagship.jpg";

//workshop,exhibhition and operations
import Hansaraj from "../assets/team_23/D._Hansaraj_workshop.jpeg";
import Shruti from "../assets/team_23/Shruti_Dey_workshop.jpg";

//events
import Sunny from "../assets/team_23/Sunny_Kumar_events.jpg";
import Rizvi from "../assets/team_23/blank.png";
import Nishta from "../assets/team_23/Nishtha_Taktewale_events.jpg";
import Reshika from "../assets/team_23/Reshika_events.jpg";

//gl and exhibhition
import Aditya from "../assets/team_23/Aditya_Tomar_GL_exhibition.jpg";
import Daud from "../assets/team_23/MD_Daud_gl_exhibhition.jpg";



function Teams() {
  return (
    <>
      <h1 className="header team-header">Our Team</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <div>
            <h2 className="team-subheader">Fest Coordinators</h2>
            <ul className="cards__items fc">
              <TeamTiles names={[{ text: "Ayush Pal", src: Ayush },
            { text: "Kirtan Jain", src: Kirtan }
            ]} />
            </ul>
          </div>
          <div>
            <h2 className="team-subheader">Marketing and Sponsorship</h2>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Bhaskar Mishra", src: Bhaskar },
                  { text: "Mamta Kanwar", src: Mamta },
                ]}
              />
            </ul>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Kshitij Chaudhary", src: Kshitij },
                  { text: "Rajnish Bhagat", src: Rajnish },
                ]}
              />
            </ul>
          </div>
          <div>
            <h2 className="team-subheader">Media and Public Relations</h2>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Nishita Lath", src: Nishita },
                  { text: "Shrishti Ambastha", src: Shrishti },
                  { text: "Ajay Saini", src: Ajay },
                ]}
              />
            </ul>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Ajmeera Jagadishwar", src: Ajmeera },
                  { text: "Aditi Verma", src: Aditi },
                ]}
              />
            </ul>
          </div>
          <div>
            <h2 className="team-subheader">Dev Team</h2>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Kartikay Saxena", src: Kartikay },
                  { text: "Saif Rahman", src: Saif },
                ]}
              />
            </ul>
          </div>
          <div>
            <h2 className="team-subheader">Registration</h2>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Shivam Yadav", src: Shivam },
                  { text: "Khushi Pathak", src: Khushi },
                  { text: "Ankur Kumar", src: Ankur },
                ]}
              />
            </ul>
          </div>
          <div>
            <h2 className="team-subheader">Creatives</h2>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Mukund Sharma", src: Mukund },
                  { text: "Suryansh", src: Suryansh },
                  { text: "Siddhant Senapati", src: Siddhant },
                ]}
              />
            </ul>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Sahil Agrawal", src: Sahil },
                  { text: "Vikramaditya", src: Vikramaditya },
                ]}
              />
            </ul>
          </div>
          <div>
            <h2 className="team-subheader">Hospitality and Logistics</h2>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Supratim Das", src: Supratim },
                  { text: "Harshita Uppal", src: Harshita },
                ]}
              />
            </ul>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Naveen Kumar", src: Naveen },
                  { text: "Pranav Raj", src: Pranav },
                ]}
              />
            </ul>
            
          </div>
          <div>
            <h2 className="team-subheader">Flagship Events</h2>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Alisha Singh", src: Alisha },
                  { text: "Vishesh", src: Vishesh },
                  { text: "Surya Prakash", src: Surya },
                ]}
              />
            </ul>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Harsh Singh", src: Harsh },
                  { text: "Piyusha Jha", src: Piyusha },
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
                  { text: "D Hansaraj", src: Hansaraj },
                  { text: "Shruti Dey", src: Shruti },
                ]}
              />
            </ul>
          </div>
          <div>
            <h2 className="team-subheader">Events</h2>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Sunny Kumar", src: Sunny },
                  { text: "Rizvi Kumari", src: Rizvi },
                ]}
              />
            </ul>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Nishta Taktewale", src: Nishta },
                  { text: "Reshika V", src: Reshika },
                ]}
              />
            </ul>
          </div>
          <div>
            <h2 className="team-subheader">Guest Lectures & Exhibitions</h2>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Aditya Tomar", src: Aditya },
                  { text: "Md Daud", src: Daud },
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
