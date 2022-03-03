import React from "react";
import { Helmet } from "react-helmet";
import './index.css';

export default function Landing(props) {
    return (
        <div className="landing">
            <canvas id="matrix">
            </canvas>
            <div className="landing-clubs">
                <img className="landing-club-logo" src={require("./aclogo.png")} width="50px" height="50px" />
                <img className="landing-club-logo" src={require("./linuxlogo.png")} width="50px" height="50px" />
            </div>
            <div className="landing-timer-container">
                <canvas id="landing-timer"></canvas>
            </div>
            <img className="landing-logo" src={require("./Logo_White.png")} width="50px" height="50px" />
            <h1 className="landing-heading">RENALINE</h1>
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
            <Helmet>
                <script scr={require("./script.js")} defer/>
            </Helmet>
        </div>
    );
}