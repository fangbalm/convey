import React, { useState } from 'react'; 
import BreatheContainer from '../breatheContainer/BreatheContainer';
import moment from 'moment';
import * as BsIcons from 'react-icons/bs';
import * as GiIcons from 'react-icons/gi';
import { Button } from 'semantic-ui-react';
import Affirmations from '../affirmations/AffirmationsContainer';
import ReactTextTransition, { presets } from "react-text-transition";
// import Breathe from '../breatheContainer/BreatheContainer';


function Home({currentUser}){
    const [currentTime, setCurrentTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'));
    const journalLength = currentUser.journals.length;
    const userJournals = currentUser.journals;
    const [breatheIsClicked, setBreatheIsClicked] = useState(false); 


    function handleBreatheToggle(){
        setBreatheIsClicked(!breatheIsClicked)

    }

    setInterval(function(){
        setCurrentTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000);
    
    return(
    <div className="homepage">
           <div className="dashboard-section">
               <div className="dashboard-section-header">
                   <p>Dashboard</p>
                   <p className="time">{currentTime}</p>
               </div>
               <div className="dashboad-section-line">
                   <div className="journals-status">


                       <div className="item-status">
                           <span className="status-number">
                               {journalLength}
                           </span>
                           <span className="status-type">
                               Journals 
                               <BsIcons.BsCircle className="circle-btn" />
                           </span>
                       </div>


                       <div className="item-status">
                           <span className="status-number">
                               13
                               {/* {journalEntriesLength} */}
                           </span>
                           <span className="status-type">
                               Total Entries
                               <BsIcons.BsCircle className="circle-btn" />
                           </span>
                       </div>
                       <div className="view-actions">
                       <button className="view-btn" onClick={handleBreatheToggle}>
                       <GiIcons.GiLungs className="lungs" />
                           {/* Breathe */}
                       </button>
                       </div>
                       {/* <span className="status-number">
                           {journalLength}
                       </span>
                       <span className="journal-count">Journals</span> */}
                       
                   </div>
                   {breatheIsClicked ? <BreatheContainer /> : null}
                   {/* <BreatheContainer /> */}
                   <Affirmations />
                   
                       {/* <div className="inspo-quote-container">
                           <span>To Keep You Going:</span>
                       <div className="inspo-box">
                          <Affirmations />

                       </div>

                       </div> */}
                   
               </div>
           </div>
    </div>
    )
};
export default Home; 
