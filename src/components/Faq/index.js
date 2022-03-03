import React from "react";
import { Fade, Slide, Zoom } from "react-reveal";
import FaqAccordion from "./faqAccordion";
import { faqs } from "./faqContent"
import './index.css';

/**
* .faq-dark-bg is the color: #3B4252 (bg colour of the titleBar)
* .faq-darkest-bg is the color: #212529 (bg colour of the conent)
* change these in ./index.css if needed
*   -sam
*/

export default function Faq() {
    return (
        <>
            <div className="faq-title">
                <Fade left>

                    <h1>FAQ</h1>
                </Fade>
            </div>
            <Fade up>

                <div className="faq-terminal-container faq-darkest-bg">
                    <div className="faq-title-bar faq-darkest-bg">
                        <div className="faq-dot" />
                        <div className="faq-dot" />
                        <div className="faq-dot" />
                    </div>
                    <div className="faq-terminal faq-dark-bg">
                        {/* <hr/> */}
                        <div class="accordion" id="accordionExample">
                            {
                                faqs.map(
                                    (faq, index) =>
                                        // <Zoom>

                                        <FaqAccordion
                                            key={index}
                                            index={index}
                                            faq={faq}
                                        />
                                    // </Zoom>
                                )
                            }
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
}