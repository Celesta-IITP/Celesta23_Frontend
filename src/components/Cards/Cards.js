import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Memories!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor."
              label="Event 1"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor."
              label="Event 2"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor."
              label="Event 3"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor."
              label="Event 4"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor.  "
              label="Event 5"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
