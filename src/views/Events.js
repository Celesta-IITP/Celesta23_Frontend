import React, { useState, useEffect } from 'react';
import '../Events.css'
import EventDetails from '../components/Events/EventDetails.js'


function Events() {
    const [searchElement, setSearchElement] = useState(false);
    const [search, setSearch] = useState("");
    const [eventsSearchOver, setEventsSearchOver] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [showEvent, setShowEvent] = useState({});
    const [eventsDesc, setEventsDesc] = useState([
        {
            title: "Event 1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sint eligendi nostrum et inventore autem, amet maiores harum quasi libero quibusdam cum debitis totam, esse assumenda, nulla numquam excepturi magni.",
            date: "29JAN2023",
            time: "10:00",
            venue: "IIT PATNA",
            teamsize: 2
        },
        {
            title: "Event 2 ch",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sint eligendi nostrum et inventore autem, amet maiores harum quasi libero quibusdam cum debitis totam, esse assumenda, nulla numquam excepturi magni.",
            date: "29JAN2023",
            time: "10:00",
            venue: "IIT PATNA",
            teamsize: 2
        },
        {
            title: "Event 3",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sint eligendi nostrum et inventore autem, amet maiores harum quasi libero quibusdam cum debitis totam, esse assumenda, nulla numquam excepturi magni.",
            date: "29JAN2023",
            time: "10:00",
            venue: "IIT PATNA",
            teamsize: 2
        },
        {
            title: "Event 4",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sint eligendi nostrum et inventore autem, amet maiores harum quasi libero quibusdam cum debitis totam, esse assumenda, nulla numquam excepturi magni.",
            date: "29JAN2023",
            time: "10:00",
            venue: "IIT PATNA",
            teamsize: 2
        },
        {
            title: "Event 5 ch",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sint eligendi nostrum et inventore autem, amet maiores harum quasi libero quibusdam cum debitis totam, esse assumenda, nulla numquam excepturi magni.",
            date: "29JAN2023",
            time: "10:00",
            venue: "IIT PATNA",
            teamsize: 2
        },
        {
            title: "Event 6",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sint eligendi nostrum et inventore autem, amet maiores harum quasi libero quibusdam cum debitis totam, esse assumenda, nulla numquam excepturi magni.",
            date: "29JAN2023",
            time: "10:00",
            venue: "IIT PATNA",
            teamsize: 2
        },
        {
            title: "Event 7 ch",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sint eligendi nostrum et inventore autem, amet maiores harum quasi libero quibusdam cum debitis totam, esse assumenda, nulla numquam excepturi magni.",
            date: "29JAN2023",
            time: "10:00",
            venue: "IIT PATNA",
            teamsize: 2
        },
        {
            title: "Event 8",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sint eligendi nostrum et inventore autem, amet maiores harum quasi libero quibusdam cum debitis totam, esse assumenda, nulla numquam excepturi magni.",
            date: "29JAN2023",
            time: "10:00",
            venue: "IIT PATNA",
            teamsize: 2
        }
    ]);
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
    imgArray[6].src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg';

    imgArray[7] = new Image();
    imgArray[7].src = 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

    const [searchEventsDesc, setSearchEventsDesc] = useState([]);
    //const [emptyArray, setEmptyArray] = useState([]);    
    const submit = (e)=>{
        e.preventDefault();
        //if(searchEventsDesc.length==0) setSearchEventsDesc([]);
        eventsDesc.map((Event) => {
            if((search.length<=Event.title.length&&Event.title.toLowerCase().includes(search.toLowerCase()))||(search.length<=Event.desc.length&&Event.desc.toLowerCase().includes(search.toLowerCase())))
            {
                searchEventsDesc.push(Event);
            }
        })
        console.log(searchEventsDesc);
        setEventsSearchOver(true);
        //{Events_Display(searchEventsDesc)};
    }
    const ShowDetails = ()=>{
        setShowDetails(true);
    }
    
    const Events_Display = (arrEvents)=>{

        return(
        <div className='Events_Display'>
            {
                arrEvents.map((Event) => {
                    
                    return(
                        <>
                            <div className='Container'>
                            <div onClick={() => setShowEvent(Event)} className='Display'><img onClick={ShowDetails} key={Event.title} className='EventDisplay' src={imgArray[eventsDesc.indexOf(Event)].src} alt={Event.title} /></div>
                            </div>
                            
                        </>
                        
                    )
                })
            }
        </div>
        )
    }
    const changeSearchElement = () => {
        setSearchElement((prev) => !prev);
    }
  return (
    <>
        
            
                <div className='Header'>
                    <h1 className='Events_Header1'>EVENTS</h1>
                    <h2 className='Events_Header2'>EVENTS</h2>
                    
                </div>
                    
                    {/*<h2 className='Events_Header2'>EVENTS</h2>*/}
                
            
                
            
               
            <div>
            {(searchElement==false)?
                <button className='Events_search' onClick={changeSearchElement}>TAP TO SEARCH</button>
            :
                <form onSubmit={submit}>
                    <input type="text" className='Events_searchInput' value={search} placeholder="SEARCH" onChange={(e)=>setSearch(e.target.value)}></input>
                </form>

            }
            </div>
            
            
            {(eventsSearchOver==false)?
                Events_Display(eventsDesc)
                :
                Events_Display(searchEventsDesc)
            }
            {showDetails && 
            
            <div className='showDetails'>
                <div className='closeButton'><button className='button' onClick={() => setShowDetails(false)}>✖</button></div>
                <EventDetails Name={showEvent.title} Description={showEvent.desc} Date={showEvent.date} Time={showEvent.time} Venue={showEvent.venue} TeamSize={showEvent.teamsize}/>
                </div>}
            
            
        
        </>
        
    
  )
}

export default Events;