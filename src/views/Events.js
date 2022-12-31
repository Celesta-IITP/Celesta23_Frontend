import React, { useState, useEffect, useMemo } from "react";
import "../Events.css";
import EventDetails from "../components/Events/EventDetails.js";
import Footer from "../components/Footer/Footer";
import { Watch } from "react-loader-spinner";

function Events() {
  const [loader, setLoader] = useState(true);
  const [searchElement, setSearchElement] = useState(false);
  const [search, setSearch] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [showEvent, setShowEvent] = useState({});

  const [eventsDesc, setEventsDesc] = useState([]);

  // fetching the events data
  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbwn5KFkzD8-Jg9-GuzopdkFpQ5EquCDyCxfF8l3ORY0IgtOaDuQUXI3f6jlkxpAeD-Jfg/exec"
    ).then((res) => {
      res.json().then((data) => {
        // console.log(data);
        setEventsDesc(data);
        setLoader(false);
      });
    });
  }, []);

  // images for events

  const ShowDetails = () => {
    setShowDetails(true);
    
  };

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
                    key={Event.eventName}
                    className="EventDisplay"
                    src={Event.posterLink}
                    alt={Event.eventName}
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  };
  const changeSearchElement = (e) => {
    if (e.target.value != "") return;
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

  return loader ? (
    <Watch
      height="80"
      width="80"
      radius="48"
      color="#4fa94d"
      ariaLabel="watch-loading"
      wrapperStyle={{
        display: "flex",
        "justify-content": "center",
        transform: "translateY(45vh)",
      }}
      wrapperClassName=""
      visible={true}
    />
  ) : (
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
