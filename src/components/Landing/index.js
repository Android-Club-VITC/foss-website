import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";
import './index.css';

export default function Landing(props) {
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
                    $(Event.Date): 17th March 2021
                </div>
                <div className="landing-buttons">
                    <button className="landing-register">
                        REGISTER
                        <i className="fa-solid fa-right-to-bracket"></i>
                    </button>
                    <button className="landing-register landing-discord">
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