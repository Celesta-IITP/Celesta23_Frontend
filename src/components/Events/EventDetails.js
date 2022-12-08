import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './EventDetails.css';

function EventDetails(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var imgArray = new Array();

    imgArray[0] = new Image();
    imgArray[0].src = 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

    imgArray[1] = new Image();
    imgArray[1].src = 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

    imgArray[2] = new Image();
    imgArray[2].src = 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

    imgArray[3] = new Image();
    imgArray[3].src = 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

    imgArray[4] = new Image();
    imgArray[4].src = 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

    imgArray[5] = new Image();
    imgArray[5].src = 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

    imgArray[6] = new Image();
    imgArray[6].src = 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

    imgArray[7] = new Image();
    imgArray[7].src = 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  return (
    <>
      <Button onClick={handleShow}>
        <img key={props.Event.title} className='EventDisplay' src={imgArray[props.index].src} alt={props.Event.title} />
    </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='modal-backdrop'
      >
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body closeButton>
            <div className='Event_bg'>
            <h1 className='Event_Name'>EVENT NAME</h1>
            <div className='EventDateTime'>
            <h2 className='EventDate'>DDMONYY</h2>
            <h2 className='EventTime'>HH:MM</h2>
            <h2 className='EventVenue'>VENUE</h2>
            <h2 className='EventTeamSize'>TEAM SIZE</h2>
            </div>
            <p className='Event_Description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nostrum labore velit ad aliquam, doloribus eaque. Architecto excepturi voluptatibus odit nemo illo quos delectus possimus, modi exercitationem optio error ad!</p>
            <div className='Event_buttons'>
            
          <button className='Event_Register'>REGISTER</button>
          <button className='Event_Rulebook'>RULEBOOK</button>
            </div>
            
            </div>
            
            
            
            
            
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default EventDetails;