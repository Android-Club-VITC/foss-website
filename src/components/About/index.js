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
	                <p>Temporibus luctus inventore! Ornare adipisicing occaecati sunt leo optio porta rhoncus venenatis illum, consequat vulputate, ab. Tenetur velit porta pariatur.</p><br></br>
	    <p>AImmortality consists largely of boredom.
		-- Zefrem Cochrane, "Metamorphosis", stardate 3219.8</p>
	    <br></br>
	    <p>We've all been under a lot of stress and boredom from attending online classes. Assignments, meets, projects, exams - that's been our schedule for more than a 1 year now. Don't you think it's high time we relaxed and enjoyed ourselves a bit .</p>
	    	</div>
	    </div>
        </div>
    );
}
