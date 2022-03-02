import React from 'react';
import './index.css';

export default function FaqAccordionTemp({faqs}) {
    return (
        faqs.map(
            (faq, index) =>
                <div className = "faq-dark-bg">
                    <span style = {{color: "#A3BE8C"}}>
                        guest@adrenaline:~/ques{index}${" "}
                    </span>
                    <span style = {{color: "#BF616A"}}>
                        {faq.question}
                    </span>
                    <br/>
                    <br/>
                    <div className="faq-dark-bg faq-centered">{faq.answer}</div>
                    <hr/>
                </div>
        )
    );
}