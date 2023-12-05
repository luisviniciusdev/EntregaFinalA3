import React from "react";
import "./style.css";
import "./media.css";

import DefaultStructure from "../../components/DefaultStructure";

const Contact = () => {
    return (
        <DefaultStructure>

            {/* CONTACT FORM */}
            <form id="contact-form">
                <label className="contact-label" for="email">Email</label>
                <input className="contact-input" type="email" name="email" placeholder="Email" />

                <label className="contact-label" for="message">Message</label>
                <input id="contact-text-input" type="text" name="message" />

                <input className="contact-submit" type="submit" value="Submit" />
            </form>

        </DefaultStructure>
    );
};

export default Contact;
