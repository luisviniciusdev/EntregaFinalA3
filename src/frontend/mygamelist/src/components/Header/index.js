import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "./media.css"

const Header = () => {
    return (
        <header id="header">
            <h1 id="header-logo"><Link to="/">MyGameList</Link></h1>

            <nav>
                <ul id="header-nav">
                    <li className="header-item"><Link to="/" className="header-link">Home</Link></li>
                    <li className="header-item"><Link to="/about" className="header-link">About</Link></li>
                    <li className="header-item"><Link to="/contact" className="header-link">Contact</Link></li>
                    <li className="header-item"><Link to="/login" className="header-link">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;