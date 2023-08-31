import React from "react";
import TeamTiles from "../components/OurTeams/TeamTiles";
import Ayush from "../assets/team_23/Ayush_Pal_fc.jpg";
import Nishita from "../assets/team_23/Nishita_Lath_mpr.jpg";
import Mukund from "../assets/team_23/Mukund_Sharma_cnd.jpg";
import Aditya from "../assets/team_23/Aditya_Tomar_GL_exhibition.jpg";
import Bhaskar from "../assets/team_23/Bhaskar_Mishra_spons.jpg";
import Saif from "../assets/team_23/Saif_dev.jpg";
import Kartikay from "../assets/team_23/Kartikay_Saxena_web.jpeg";
import Alisha from "../assets/team_23/Alisha_Singh_flagship.jpg";
import Shivam from "../assets/team_23/Shivam_Yadav_rsp.jpg";
import Reshika from "../assets/team_23/Reshika_events.jpg";
import Pranav from "../assets/team_23/Pranav_Raj_hospi.png";
// import Aarav from "../assets/team/Aarav_Arya_mpr.jpg";
// import Ayush from "../assets/team_23/Ayush_Agrawal_flagship.jpg";
// import Athul from "../assets/team_23/ATHUL_MPR.jpg";
// import Farhaan from "../assets/team/farhaan_cnd.jpeg";
// import Harsha from "../assets/team/Harsha_Dasari_flagship.jpg";
// import Kanishk from "../assets/team/Kanishk_Giri_mpr.jpg";
// import Kushagra from "../assets/team/Kushagra_Yadav_mpr.jpg";
// import Piyush from "../assets/team/Piyush_Gautam_hospitality.jpg";
// import Prajyot from "../assets/team/Prajyot R. - Prajyot Ramteke.png";
// import Prashanth from "../assets/team/Prashanth_mpr.jpg";
// import Priyanshi from "../assets/team/Priyanshi_Singh_flagship.jpg";
// import Shresth from "../assets/team/Shresth_Verma_workshop.jpg";
// import Spandan from "../assets/team/Spandan_Prasad_registration.jpg";
// import Srinithya from "../assets/team/srinithya_chethi_reddy_events.jpg";
// import Vikash from "../assets/team/Vikash_kumar_Rai_hospitality.jpg";
// import Yash from "../assets/team/Yash_cnd.jpeg";
// import Chirag from "../assets/team/Chirag_flagship.jpg";

function Teams() {
  return (
    <>
      <h1 className="header team-header">Our Team</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <div>
            <h2 className="team-subheader">Fest Coordinator</h2>
            <ul className="cards__items fc">
              <TeamTiles names={[{ text: "Ayush Pal", src: Ayush },
            // { text: "Kirtan Jain", src: Kirtan_Jain }
            ]} />
            </ul>
          </div>
          <div>
            <h2 className="team-subheader">Marketing and Sponsorship</h2>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  { text: "Bhaskar Mishra", src: Bhaskar },
                  // { text: "Mamta Kanwar", src: Mamta },
                  // { text: "Kshitij Chaudhary", src: Kshitij },
                  // { text: "Rajnish Bhagat", src: Rajnish },
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
                  // { text: "Shrishti Ambastha", src: Shrishti },
                  // { text: "Ajay Saini", src: Ajay },
                ]}
              />
            </ul>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  // { text: "Ajmeera Jagadishwar", src: Ajmeera },
                  // { text: "Aditi Verma", src: Aditi },
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
                  // { text: "Khushi Pathak", src: Khushi },
                  // { text: "Ankur Kumar", src: Ankur },
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
                  // { text: "Suryansh", src: Suryansh },
                  // { text: "Siddhant Senapati", src: Siddhant },
                ]}
              />
            </ul>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  // { text: "Sahil Agrawal", src: Sahil },
                  // { text: "Vikramaditya", src: Vikramaditya },
                ]}
              />
            </ul>
          </div>
          <div>
            <h2 className="team-subheader">Hospitality and Logistics</h2>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  // { text: "Supratim", src: Supratim },
                  // { text: "Harshita Uppal", src: Harshita },
                ]}
              />
            </ul>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  // { text: "Naveen Kumar", src: Naveen },
                  // { text: "Pranav Raj", src: Pranav },
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
                  // { text: "Vishesh", src: Vishesh },
                  // { text: "Surya Prakash", src: Surya },
                ]}
              />
            </ul>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  // { text: "Harsh Singh", src: Harsh },
                  // { text: "Piyusha Jha", src: Piyusha },
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
                  // { text: "D Hansaraj", src: Hansaraj },
                  // { text: "Shruti Dey", src: Shruti },
                ]}
              />
            </ul>
          </div>
          <div>
            <h2 className="team-subheader">Events</h2>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  // { text: "Sunny K", src: Sunny },
                  // { text: "Rizvi Kumari", src: Rizvi },
                ]}
              />
            </ul>
            <ul className="cards__items">
              <TeamTiles
                names={[
                  // { text: "Nishta Taktewale", src: Nishta },
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
                  // { text: "Md Daud", src: Daud },
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
