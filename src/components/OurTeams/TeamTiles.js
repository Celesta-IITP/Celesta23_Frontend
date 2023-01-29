import React from "react";
import CardItem from "../Cards/CardItem";
import Picture1 from "../../assets/gallery/ha1.jpg";
import "../Cards/Cards.css";

function TeamTiles({ names }) {
  return (
    <>
      {names.map((element) => {
        return (
          <CardItem
            src={element.src || "https://i.ibb.co/JC4skS0/team-animate.jpg"}
            text={element.text}
            label="Picture"
          />
        );
      })}
    </>
  );
}

export default TeamTiles;
