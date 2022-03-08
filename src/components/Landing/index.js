import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";
import './index.css';


export default function Landing(props) {
    

  const style = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    height:'auto',
    bgcolor: "#000D1a",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
    return (<>
            <canvas id="matrix">
            </canvas>
        <div className="landing">
            <div className="landing-clubs">
                <Fade left>
                    <img className="landing-club-logo" src={require("./aclogo.png")} width="50px" height="50px" />
                </Fade>
                <Fade right>
                    <img className="landing-club-logo" src={require("./linuxlogo.png")} width="50px" height="50px" />
                </Fade>
            </div>

            <div className="landing-timer-container">
                {/* <Fade down> */}
                    <canvas id="landing-timer"></canvas>
                {/* </Fade> */}
            </div>
            <div className="landing-title">
                {/* <Fade left> */}
                    <img className="landing-logo" src={require("./Logo_White.png")} />
                {/* </Fade> */}
                {/* <Fade right> */}
                    <h1 className="landing-heading">RENALINE</h1>
                {/* </Fade> */}
            </div>
            <Fade up>

                <div className="landing-venue">
                  
                    {/* <!-- <i className="fa-solid fa-calendar"></i> --> */}
                  <div style={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                  <span> $(Event.Date) </span> 
                  <span>17th March 2022</span>
                  </div>
                </div>
                <div className="landing-buttons">
                    <button className="landing-register" onClick={(e) => {
      e.preventDefault();
      window.location.href='https://vitchennaievents.com/conf1/';
      }}>
                        REGISTER
                        <i className="fa-solid fa-right-to-bracket"></i>
                    </button>
                    <button className="landing-register landing-discord" onClick={(e) => {
      e.preventDefault();
      window.location.href='https://discord.gg/xK23wBty';
      }}>
                        <i className="fab fa-discord"></i>
                        DISCORD
                    </button>
                </div>
            </Fade>
            <Helmet>
                <script scr={require("./script.js")} defer />
            </Helmet>
        </div>
      
    </>
    );
}