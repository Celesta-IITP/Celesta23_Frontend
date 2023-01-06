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
          <button
            className="Button1"
            onClick={() =>
              openLink(props.Payment != "" ? props.Payment : props.Register)
            }
          >
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
