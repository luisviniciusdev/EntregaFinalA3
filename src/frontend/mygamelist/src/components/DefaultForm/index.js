import react from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "./media.css";

const DefaultForm = ({children}) => {
    return (
        <section id="form">
            <div id="form-area">
                <h1 id="form-logo"><Link to="/" id="form-logo-link">MyGameList</Link></h1>

                {children}
            </div>
        </section>
    );
};

export default DefaultForm;
