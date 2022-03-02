import React, { useState } from 'react';
import './index.css';

export default function FaqAccordion({index, faq}) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="faq-dark-bg">
            <br/>
            <div className = "faq-accordion-question faq-dark-bg">
                <div className = "faq-dark-bg">
                    <span style = {{color: "#A3BE8C"}}>
                        guest@adrenaline:~/ques{index}${" "}
                    </span>
                    <span style = {{color: "#BF616A"}}>
                        {faq.question}
                    </span>
                    <br/>
                </div>
                <div
                    className = "faq-dark-bg faq-run-button faq-disable-select"
                    onClick = {() => setIsActive(!isActive)}
                >
                    { isActive ? "stop □" :"run ⩥" }
                </div>
            </div>
            { isActive && <div className = "faq-dark-bg faq-centered">
                <br/>
                {faq.answer}
            </div> }
            <br/>
            <div className = "faq-centered faq-dark-bg">===</div>
        </div>
    );
}