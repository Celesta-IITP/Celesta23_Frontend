import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./EventDetails.css";

function EventDetails(props) {
  function openLink(link) {
    window.open(link, "blank");
  }

  return (
    <>
      <div className="Details">
        <h1 className="Name">{props.Name.toUpperCase()}</h1>
        <h2 className="Date">{props.Date}</h2>
        <h2 className="Time">{props.Time}</h2>
        <h3 className="Venue">VENUE: {props.Venue}</h3>
        <h3 className="TeamSize">TEAM SIZE: {props.TeamSize}</h3>

        <p className="Description">{props.Description}</p>
        <div className="Register">
          <button className="Button1" onClick={() => openLink(props.Register)}>
            REGISTER
          </button>
        </div>
        <div className="Rulebook">
          <button className="Button2" onClick={() => openLink(props.Rulebook)}>
            RULEBOOK
          </button>
        </div>
      </div>
    </>
  );
}

export default EventDetails;
