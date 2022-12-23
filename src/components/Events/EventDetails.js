import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import './EventDetails.css';

function EventDetails(props) {

  return (
    <>
      
      <div className='Details'>
        <h1 className='Name'>{props.Name.toUpperCase()}</h1>
        <h2 className='Date'>{props.Date}</h2>
        <h2 className='Time'>{props.Time}</h2>
        <h3 className='Venue'>VENUE: {props.Venue}</h3>
        <h3 className='TeamSize'>TEAM SIZE: {props.TeamSize}</h3>
      
      <p className='Description'>{props.Description}</p>
      <div className='Register'><a href={props.Reglink}><button className='Button1'>REGISTER</button></a></div>
      <div className='Rulebook'><a href={props.Rulelink}><button className='Button2'>RULEBOOK</button></a></div>
      </div>
    </>
  );
}

export default EventDetails;