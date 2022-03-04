import React from "react";
import {Fade} from 'react-reveal';
import './index.css';

export default function Timeline() {
    return (
        <>
            <div className="faq-title">
                <Fade left>
                    <h1>Timeline</h1>
                </Fade>
            </div>
            <Fade right>
            <div className="timeline">
                <div className="big"><img src={require('./timet.png')} className="timefull" /></div>
                
            </div>
            </Fade>
        </>
    );
}