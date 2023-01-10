import React from "react";
import "./EventDetails.css";

function EventDetails(props) {
  function openLink(link) {
    window.open(link, "blank");
  }

  return (
    <>
      <div className="Details">
        <h1 className="Name">{props.Name.toUpperCase()}</h1>
        <h2 className="Date">DATE: {props.Date.toUpperCase()}</h2>
        <h2 className="Time">TIME: {props.Time.toUpperCase()}</h2>
        <h3 className="Venue">VENUE: {props.Venue.toUpperCase()}</h3>
        {props.TeamSize && (
          <h3 className="TeamSize">TEAM SIZE: {props.TeamSize}</h3>
        )}
        <p className="content-description">{props.Description}</p>

        <div className="Register">
          <a href={props.Payment != "" ? props.Payment : props.Register}
             target="_blank"
          >
            <button className="Button1">
            REGISTER
            </button>
          </a>
        </div>
        <div className="Rulebook">
          <a href={props.Rulebook}
             target="_blank"
          >
            <button className="Button2">
            RULEBOOK
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default EventDetails;
