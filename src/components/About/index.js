import React from "react";
import './index.css';
import gif from './aboutSide.gif';

export default function About(props){
    return (
        <div className="About-backgroundContainer">
            
	<div className="About-headerText">
		[android@lug]$ ./Adrenaline --help 
         
	    </div>
	    <div className="About-description">
	    	<div className="About-leftDescription">
	           <img src={gif} />
	    	</div>

	    	<div className="About-rightDescription">
	                <p>We all have been missing the good old days, coming with our jittery stomach but a heart full of excitement to participate in front of a crowd. Unfortunately for the last couple of years, we have been stuck with TEAMS, GMEET and ZOOM for all our events and competitions. And now that we are all here, it’s time to get back those jittery and anxious feelings.</p>
	    <br></br>
	    <p>Android Club along with Linux Club present to you ADRENALINE- A one-day offline project building event where participants will use open-source software, based on the domains provided. A great opportunity to show off all the skills you have gained and get to win exciting prizes and certificates. So, set up your repositories and let the Adrenaline rush through you!</p>
	    	</div>
	    </div>
        </div>
    );
}
