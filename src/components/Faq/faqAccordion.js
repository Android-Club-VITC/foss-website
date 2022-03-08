import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './index.css';

export default function FaqAccordion({ index, faq }) {
    const [isActive, setIsActive] = useState(false);
    // console.log(id);
    return (
        <div className="faq-dark-bg">
            <br />
            
                <div class="accordion-item">
                    <div type="button" className="faq-accordion-question faq-dark-bg">
                        <div className="faq-dark-bg">
                            <span style={{ color: "lime", fontSize: "20px" }}>
                                Guest@Adrenaline:${" "}
                            </span>
                            <span style={{ color: "cyan", fontSize: "20px" }}>
                                {/* ?~/Ques */}
                            </span>
                            <span style={{ color: "white", fontSize: "20px" }}>
                                {faq.question}
                            </span>
                            <br />
                        </div>
                        <div
                            className="faq-dark-bg faq-disable-select"   style={{minWidth:'10%'}}
                            onClick={() => setIsActive(!isActive)}
                            data-bs-toggle="collapse" data-bs-target={"#" + faq.id} aria-expanded="true" aria-controls="collapseOne"
                        >
                            {isActive ?<FontAwesomeIcon icon={faCaretDown} size="2xl" style={{cursor:'pointer'}} />: <FontAwesomeIcon icon={faCaretDown} size="2xl" style={{cursor: 'pointer'}} />}
                        </div>
                    
                    </div>
                    <div id={faq.id} class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div className="faq-dark-bg faq-centered">
                                <br />
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                </div>
            <br />
            {/* <div className="faq-centered faq-dark-bg">===</div> */}
        </div>
    );
}