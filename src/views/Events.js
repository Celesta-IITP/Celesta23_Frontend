import React, { useState, useEffect, useRef, useMemo } from 'react';
import '../Events.css'
import EventDetails from '../components/Events/EventDetails.js'
import Footer from '../components/Footer/Footer';

function Events() {
    
    const [searchElement, setSearchElement] = useState(false);
    const [search, setSearch] = useState("");
    
    const [showDetails, setShowDetails] = useState(false);
    const [showEvent, setShowEvent] = useState({});
    
    const [eventsDesc, setEventsDesc] = useState([
        {
            title: "Robowars",
            desc: "It's an all out war as we bring to you the dynamite of an event - ROBOWAR! and go berserk with deadly weapons and menacing robots to show off in the Arena of Death! With mechanical monsters creeping out the arena. Design and construct a wireless remote controlled robot capable of fighting one on one .You too have the chance to show off your demon robot, and unleash the war machine inside you!",
            date: "28TH-29TH JANUARY 2023",
            time: "9 - 11 AM (28 JAN), 3 - 5 PM (29 JAN)",
            venue: "IIT PATNA",
            teamsize: "UP TO 5",
            regurl: 'https://forms.gle/BhCdbGJBporjXvZu5',
            ruleurl: 'https://bit.ly/robowars_celesta',
            image: 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: "Drone Tussle",
            desc: "They say sky's the limit, but it can also be the limit of new heights. Break the limits and soar the skies, as your drones take charge in our event - DRONE TUSSLE! Manoeuvre through deadly mazes and have close encounters with traps as your drone and you make way through the Arena of Illusions. It's an event in which you need to design a Quadcopter that will manoeuvre through hurdles and the fastest one to clear all hurdles wins the tussle.",
            date: "27TH-28TH JANUARY 2023",
            time: "2 - 4 PM (BOTH DAYS)",
            venue: "IIT PATNA",
            teamsize: "UP TO 4",
            regurl: 'https://forms.gle/y8nYYt5M5eqUSVLH7',
            ruleurl: 'https://bit.ly/dronetussle_celesta',
            image: 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: "Death Race",
            desc: "Here we present a racing event where participants have to design an RC car and traverse an obstacle course faster than their opponents to win.",
            date: "27TH JANUARY 2023",
            time: "5 - 8 PM",
            venue: "IIT PATNA",
            teamsize: "UP TO 3",
            regurl: 'https://forms.gle/h6FnT5hsKwrW8eSP8',
            ruleurl: 'https://bit.ly/Deathrace-celesta',
            image: 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: "Robo Soccer",
            desc: "Design a manual robot which can travel through the arena, carrying a 5-7 cm diameter ball to the opponent's goal and make your team win by dragging or hitting the ball and scoring more goals!",
            date: "29TH JANUARY 2023",
            time: "9 AM - 1 PM",
            venue: "IIT PATNA",
            teamsize: "UP TO 3",
            regurl: 'https://forms.gle/9x3msqB3dGXgbALX7',
            ruleurl: 'https://bit.ly/Robosoccer-celesta',
            image: 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: "Robo Sumo",
            desc: "It's an all out war as we bring to you the dynamite of an event - ROBOSUMO! and go berserk with deadly weapons and menacing robots to show off in the Arena of Death! With mechanical monsters creeping out the arena. Design and construct a wireless remote controlled robot capable of fighting one on one .You too have the chance to show off your demon robot, and unleash the war machine inside you!",
            date: "29TH JANUARY 2023",
            time: "9 AM - 1 PM",
            venue: "IIT PATNA",
            teamsize: "UP TO 4",
            regurl: 'https://forms.gle/jPPSpnBwnHAEVG3B8',
            ruleurl: 'https://bit.ly/RoboSumo_celesta',
            image: 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: "Robo Race",
            desc: "Presenting to you a racing event where participants have to design a RC car and traverse an obstacle course faster than their opponents.",
            date: "28TH JANUARY 2023",
            time: "9 AM - 3 PM",
            venue: "IIT PATNA",
            teamsize: "UP TO 3",
            regurl: 'https://forms.gle/XrJNxAFzAUcpBdnE7',
            ruleurl: 'https://bit.ly/roborace_celesta',
            image: 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: "Byte Race",
            desc: "ByteRace is an ICPC style coding competition. It is a competitive programming contest with 5 to 6 fun algorithmic problems where individuals can take part to test their understanding of various concepts of DSA. The problems are made by the Competitive Programming Community Of IIT Patna and will be held over Codechef/Hackerrank/Codeforces.",
            date: "15TH JANUARY 2023",
            time: "8 - 10 PM",
            venue: "IIT PATNA",
            teamsize: "1",
            regurl: 'https://forms.gle/TrGXRTM5HRwP8VAc9',
            ruleurl: 'https://bit.ly/Byterace-celesta',
            image: 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: "Hack_it_out",
            desc: "Celesta '23 presents to you a hackathon event wherein problem statements will be given and  the participants have to code a web/mobile application within the given time frame.",
            date: "22ND-29TH JANUARY 2023",
            time: "10:00",
            venue: "IIT PATNA",
            teamsize: "UP TO 4",
            regurl: 'https://forms.gle/5Qkyz6bjPz2wL1QS7',
            ruleurl: 'https://bit.ly/hackitout_celesta',
            image: 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: "Solid Design",
            desc: "The journey from sketching out an engineering drawing to the final destination of witnessing a full-fledged building involves many simultaneous steps. Celesta '23 along with the ACE (Association for Civil Engineers) brings you another edition of Solid Design, providing you an opportunity to upgrade your skills by creating 3D models for the proposed designs.",
            date: "19TH-26TH JANUARY 2023",
            time: "10:00",
            venue: "IIT PATNA",
            teamsize: "2 - 4",
            regurl: 'https://forms.gle/NKpDgzDSERyqCibE9',
            ruleurl: 'https://bit.ly/soliddesign_celesta',
            image: 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: "Sudo OverRide",
            desc: "Sudo Override is the Capture the Flag (CTF) event organised by NJACK, IIT Patna in collaboration with Celesta 2023. It aims to bring students with various skill sets together, where participants must reverse engineer, break, hack, decrypt, and think creatively and critically to solve the challenges and capture the flags. This is a twenty-four hour long timed CTF competition.",
            date: "28TH JANUARY 2023",
            time: "10:00",
            venue: "IIT PATNA",
            teamsize: "UP TO 4",
            regurl: 'https://forms.gle/iuHoMfUQQfPgHkEe9',
            ruleurl: 'https://bit.ly/Sudooverride-celesta',
            image: 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: "NJATH",
            desc: "NJATH is an online treasure hunt event which has multiple rounds with each round having multiple questions. Answering questions correctly gives you points whereas opening questions and asking hints deducts points. The event happens over a duration of a couple of days, at the end of which the participant with the highest points wins.",
            date: "27TH-29TH JANUARY 2023",
            time: "10:00",
            venue: "IIT PATNA",
            teamsize: 1,
            regurl: 'https://forms.gle/ZdZUbh24t7HsP5hE7',
            ruleurl: 'https://bit.ly/Njath-celesta',
            image: 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: "Quest-ion",
            desc: `It will be a two-stage quiz event open for all age groups. The quiz would be on the topic of Science and Technology.
            Prelims: 20 questions (including audio & visual). It is an elimination round. Top 8 teams qualify for finals.
            Finals: The teams which qualify for this round will go through multiple rounds.
            The team with the highest score in the finals wins.
            `,
            date: "29JAN2023",
            time: "10:00",
            venue: "IIT PATNA",
            teamsize: 2,
            regurl: 'https://forms.gle/BhCdbGJBporjXvZu5',
            ruleurl: 'https://bit.ly/robowars_celesta',
            image: 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: "Virtual Crypto Trading",
            desc: "It is similar to actual trading where you can buy and sell stocks. However, here no real money is involved. You invest only in virtual money. You can use this money to practice trading. Stock simulators provide real-time stock data, which means that you can try out different strategies of trading in stocks just like the real world stock market, but risk-free.",
            date: "27TH-29TH JANUARY 2023",
            time: "10:00",
            venue: "IIT PATNA",
            teamsize: 2,
            regurl: 'https://forms.gle/ZdZUbh24t7HsP5hE7',
            ruleurl: 'https://bit.ly/Njath-celesta',
            image: 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: "Astro Particle Voyage",
            desc: `Astro Particle Voyage will be a trial to showcase your astronomical prowess. Tackle multiple rounds filled with quizzes and simulations to prove your mettle. Beat your competition and deem yourself worthy of ascension. Think you can build your way faster to the source of all answers?
            It will consist of 3 rounds- 2 Quiz Rounds for Elimination and 1 Simulation round in which the teams will have to design a rocket model using OpenRocket software
            `,
            date: "27TH-29TH JANUARY 2023",
            time: "10:00",
            venue: "IIT PATNA",
            teamsize: 2,
            regurl: 'https://forms.gle/ZdZUbh24t7HsP5hE7',
            ruleurl: 'https://bit.ly/Njath-celesta',
            image: 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: "Case Study",
            desc: "Wants to exploit the entrepreneur inside you by giving your captivating ideas an unerring path leading to the harbour of innovation. We bring you a case study competition where you will get an opportunity to test your path breaking ideas. This event consists of two engaging rounds, starting with a two-slider presentation presenting the solution to the given problem statement, followed by a six-slider presentation that needs to be presented to a panel of judges.",
            date: "27TH-29TH JANUARY 2023",
            time: "10:00",
            venue: "IIT PATNA",
            teamsize: 2,
            regurl: 'https://forms.gle/ZdZUbh24t7HsP5hE7',
            ruleurl: 'https://bit.ly/Njath-celesta',
            image: 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: "Parliamentary Debate",
            desc: "The most widely used kind of intercollegiate debating worldwide is British Parliamentary debate or BP. The Government and the Opposition are the two parties that speak in favour of and against the motion, respectively, in the four teams of two speakers that make up a BP discussion. The debate is introduced by the Government, and it is concluded by the Opposition. One 7-minute speech is delivered by each speaker.",
            date: "27TH-29TH JANUARY 2023",
            time: "10:00",
            venue: "IIT PATNA",
            teamsize: 2,
            regurl: 'https://forms.gle/ZdZUbh24t7HsP5hE7',
            ruleurl: 'https://bit.ly/Njath-celesta',
            image: 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: "Mind Benders",
            desc: "A pen and paper test full of logical aptitude questions, is predicted to measure your scientific prowess. Compete with multiple contenders and be the winner of this hour-long event.",
            date: "27TH-29TH JANUARY 2023",
            time: "10:00",
            venue: "IIT PATNA",
            teamsize: 2,
            regurl: 'https://forms.gle/ZdZUbh24t7HsP5hE7',
            ruleurl: 'https://bit.ly/Njath-celesta',
            image: 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: "Beg Borrow Steal",
            desc: "Celesta '23 presents BegBorrowSteal, a fan favourite event guaranteed to give you the giggles. Run around campus trying to collect items from anywhere using any means necessary*. Be the quickest and most accurate to bag prizes.",
            date: "27TH-29TH JANUARY 2023",
            time: "10:00",
            venue: "IIT PATNA",
            teamsize: 2,
            regurl: 'https://forms.gle/ZdZUbh24t7HsP5hE7',
            ruleurl: 'https://bit.ly/Njath-celesta',
            image: 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: "Static Rush",
            desc: "A fast paced treasure hunt event with circuitry at its heart. Connect the clues given to find various destinations before eventually getting to the final boss, a complicated circuit challenge.",
            date: "27TH-29TH JANUARY 2023",
            time: "10:00",
            venue: "IIT PATNA",
            teamsize: 2,
            regurl: 'https://forms.gle/ZdZUbh24t7HsP5hE7',
            ruleurl: 'https://bit.ly/Njath-celesta',
            image: 'https://images.pexels.com/photos/1028646/pexels-photo-1028646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ]);

    
    //const [emptyArray, setEmptyArray] = useState([]);    
    
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
                            <div onClick={() => setShowEvent(Event)} className='Display'><img onClick={ShowDetails} key={Event.title} className='EventDisplay' src={Event.image} alt={Event.title} /></div>
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
    const searchEventsDesc = useMemo(() => {
        return eventsDesc.filter(Event => {
          return (Event.title.toLowerCase().includes(search.toLowerCase())||Event.desc.toLowerCase().includes(search.toLowerCase()))
        })
      }, [eventsDesc, search]);
    const searchFilter = (e) => {
        setSearch(e.target.value);
        
        
        
        
    }
    
    
    
  return (
    <>
        
            
                <div className='Header'>
                    <h1 className='Events_Header1'>EVENTS</h1>
                    <h2 className='Events_Header2'>EVENTS</h2>
                    
                </div>
                    
                    {/*<h2 className='Events_Header2'>EVENTS</h2>*/}
                
            
                
            
               
            <div>
            {(!searchElement)?
                <button className='Events_search' onClick={changeSearchElement}>TAP TO SEARCH</button>
            :
                
                    <input type="text" className='Events_searchInput' value={search} placeholder="SEARCH" onChange={searchFilter}></input>
                

            }

            

            
            </div>

            
            
            
            
            {Events_Display(searchEventsDesc)}
            
            {showDetails && 
            <>
            <div className="Box1"></div>
            <div className="Box2"></div>
            <div className="Box3"></div>
            <div className="Box4"></div>
            <div className='showDetails'>
                
                <div className='closeButton'><button className='button' onClick={() => setShowDetails(false)}>✖</button></div>
                <EventDetails Name={showEvent.title} Description={showEvent.desc} Date={showEvent.date} Time={showEvent.time} Venue={showEvent.venue} TeamSize={showEvent.teamsize}  Reglink={showEvent.regurl} Rulelink={showEvent.ruleurl}/>
                </div>
                
             </>   }
            
            <Footer/>
        
        </>
        
    
  )
}

export default Events;