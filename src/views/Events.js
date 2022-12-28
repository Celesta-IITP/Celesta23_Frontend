import React, { useState, useEffect, useRef, useMemo } from "react";
import "../Events.css";
import EventDetails from "../components/Events/EventDetails.js";
import Footer from "../components/Footer/Footer";

function Events() {
  const [searchElement, setSearchElement] = useState(false);
  const [search, setSearch] = useState("");

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

  // events to display
  const Events_Display = (eventsDesc) => {
    return (
      <div className="Events_Display">
        {eventsDesc.map((Event) => {
          return (
            <>
              <div className="Container">
                <div onClick={() => setShowEvent(Event)} className="Display">
                  <img
                    onClick={ShowDetails}
                    key={Event.title}
                    className="EventDisplay"
                    src={imgArray[eventsDesc.indexOf(Event)].src}
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

  // search bar
  const changeSearchElement = () => {
    setSearchElement((prev) => !prev);
  };

  // searching feature
  const searchEventsDesc = useMemo(() => {
    return eventsDesc.filter((Event) => {
      return (
        Event.eventName.toLowerCase().includes(search.toLowerCase()) ||
        Event.description.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [eventsDesc, search]);
  const searchFilter = (e) => {
    setSearch(e.target.value);
  };

  // the fading effect animation
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

  // return the jsx
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
          <div className="Box1"></div>
          <div className="Box2"></div>
          <div className="Box3"></div>
          <div className="Box4"></div>
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
              Venue={"IIT Patna"}
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
