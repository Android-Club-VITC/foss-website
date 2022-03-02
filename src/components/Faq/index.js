import React from "react";
import FaqAccordion from "./faqAccordion";
import { faqs } from "./faqContent"
import './index.css';

/**
* .faq-dark-bg is the color: #3B4252 (bg colour of the titleBar)
* .faq-darkest-bg is the color: #212529 (bg colour of the conent)
* change these in ./index.css if needed
*   -sam
*/

export default function Faq(){
    return (
        <div className = "faq-terminal-container faq-darkest-bg">
            <div className = "faq-title-bar faq-darkest-bg">
                <div className = "faq-dot"/>
            </div>
            <div className = "faq-terminal faq-dark-bg">
                <div className = "faq-dark-bg faq-centered"><h1>FAQs</h1></div>
                <hr/>
                {
                    faqs.map(
                        (faq, index) => 
                        <div class="accordion" id="accordionExample">
                            <FaqAccordion
                                key = {index}
                                index = {index}
                                faq = {faq}
                            />
                            </div>
                    )
                }
            </div>
        </div>
    );
}