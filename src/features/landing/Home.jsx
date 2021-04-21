import React, { useState } from 'react'; 
import BreatheContainer from '../breatheContainer/BreatheContainer';
import moment from 'moment';
import * as BsIcons from 'react-icons/bs';
import { Button } from 'semantic-ui-react';
// import Breathe from '../breatheContainer/BreatheContainer';


function Home({currentUser}){
    const [currentTime, setCurrentTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'));
    const journalLength = currentUser.journals.length;
    const userJournals = currentUser.journals

    // console.log(userJournals)

    const test = userJournals.forEach((journal) => {
            // if(journal.entries){
            //     return "Hi!"
            // }
    })

    // console.log(test)

    // console.log(test)

    // const test = currentUser.journals
    // console.log(test)

    // console.log(journalLength)

    setInterval(function(){
        setCurrentTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000);
    
    return(
    <div className="homepage">
           Homepage
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
                       <Button class="view-btn list-view">
                           Breathe
                       </Button>

                       </div>

                      





                       {/* <span className="status-number">
                           {journalLength}
                       </span>
                       <span className="journal-count">Journals</span> */}
                       
                   </div>

               </div>
           </div>
           {/* <BreatheContainer /> */}
    </div>
    )
};
export default Home; 
