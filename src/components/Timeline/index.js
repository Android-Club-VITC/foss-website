import React from "react";
import './index.css';

export default function Timeline(){
    return (
        <div className="timeline">
        <div className="big"><img src={require('./timefullgreen.png')} className="timefull" /></div>
        <div className="small"><img src={require('./timergreen.png')} className="timer" /></div>
       </div>
    );
}