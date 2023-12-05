import React from "react";
import './style.css'
import './media.css'
import { Link } from "react-router-dom";

const CallToAction = () => {
    return (
        <section id="cta-box">
            <div id="cta">
                <h6 id="cta-title">Get Start With MyGameList</h6>
                <p id="cta-text">Elevate your gaming experience with MyGameList: Your game collection, organized. Join now and level up your gaming life!</p>
                <button id="cta-button"><Link to="/register" id="cta-button-link">Get Started</Link></button>
            </div>
        </section>
    );
};

export default CallToAction;
