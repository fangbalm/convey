import React, { useState } from 'react'; 
import BreatheContainer from '../breatheContainer/BreatheContainer';
import moment from 'moment';
// import Breathe from '../breatheContainer/BreatheContainer';


function Home(){
    const [currentTime, setCurrentTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'));

    setInterval(function(){
        setCurrentTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000);
    
    return(
    <div className="homepage">
           Homepage
           <div className="dashboard-section">
               <div className="dashboard-section-header">
                   <p>Journals</p>
                   <p>{currentTime}</p>
               </div>
           </div>
           {/* <BreatheContainer /> */}
    </div>
    )
};
export default Home; 
