import React, { useState, useEffect, useMemo, useRef } from "react";
import "../Events.css";
import EventDetails from "../components/Events/EventDetails.js";
import Footer from "../components/Footer/Footer";
/*function useOutsideClick(ref, callback, when){
  const saveCallback=useRef(callback);
    useEffect(()=>{
      saveCallback.current = callback;
    })
    function handler(e){
      if(ref.current && !ref.current.contains(e.target)){
        saveCallback.current();
      }
    }
  useEffect(()=>{
    if(when){
      document.addEventListener("click", handler)
      return () => document.removeEventListener("click", handler)
    }
  }, [when])
}*/

function Events() {
  const [searchElement, setSearchElement] = useState(false);
  const [search, setSearch] = useState("");
  const [eventsSearchOver, setEventsSearchOver] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showEvent, setShowEvent] = useState({});

  const [eventsDesc, setEventsDesc] = useState([]);

  // fetching the events data
  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbyjxN11T-I56DGH_6nYngI3qdCEESbqWOwrzC94hDpD5lpk6UtZbZ-C9jBHiv8W0eA-wg/exec"
    ).then((res) => {
      res.json().then((data) => {
        // console.log(data);
        setEventsDesc(data);
      });
    });
  }, []);

  // images for events
  var imgArray = new Array();

  for (let i = 0; i < eventsDesc.length; i++) {
    imgArray[i] = new Image();
    imgArray[i].src =
      "https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  }

  const ShowDetails = () => {
    setShowDetails(true);
  };

  const Events_Display = (arrEvents) => {
    return (
      <div className="Events_Display">
        {arrEvents.map((Event) => {
          return (
            <>
              <div className="Container">
                <div onClick={() => setShowEvent(Event)} className="Display">
                  <img
                    onClick={ShowDetails}
                    key={Event.title}
                    className="EventDisplay"
                    src={Event.image}
                    alt={Event.title}
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  };
  const changeSearchElement = () => {
    setSearchElement((prev) => !prev);
  };

  const options = { threshold: 0.1 };

  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    const appearOnScroll = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("appear");
      });
    }, options);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });

    return () => {
      faders.forEach((fader) => {
        appearOnScroll.unobserve(fader);
      });
    };
  }, [options]);

  return (
    <>
      <div className="Header">
        <h1 className="Events_Header1">EVENTS</h1>
        <h2 className="Events_Header2">EVENTS</h2>
      </div>

      {/*<h2 className='Events_Header2'>EVENTS</h2>*/}

      <div>
        {!searchElement ? (
          <button className="Events_search" onClick={changeSearchElement}>
            TAP TO SEARCH
          </button>
        ) : (
          <input
            type="text"
            className="Events_searchInput"
            value={search}
            placeholder="SEARCH"
            onChange={searchFilter}
            onBlur={changeSearchElement}
          ></input>
        )}
      </div>

      {Events_Display(searchEventsDesc)}
      {showDetails && (
        <>
          <div className="Overlay" onClick={() => setShowDetails(false)}></div>

          <div className="showDetails">
            <div className="closeButton">
              <button className="button" onClick={() => setShowDetails(false)}>
                ✖
              </button>
            </div>
            <EventDetails
              Name={showEvent.eventName}
              Description={showEvent.description}
              Date={showEvent.eventDate}
              Time={showEvent.eventTime}
              Venue={"IIT PATNA"}
              TeamSize={showEvent.teamsize}
              Register={showEvent.registrationFormLink}
              Rulebook={showEvent.ruleBook}
              Payment={showEvent.paymentGatewayLink}
            />
          </div>
        </>
      )}

      <Footer />
    </>
  );
}

export default Events;
