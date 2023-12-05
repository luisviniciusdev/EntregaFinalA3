import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import DefaultForm from "../../components/DefaultForm";

const Register = () => {
    return (
        <DefaultForm>
            <form id="register-form">
                <label className="register-label" for="username">Username</label>
                <input className="register-input" type="text" id="username" name="username" placeholder="Username" required />

                <label className="register-label" for="email">Email</label>
                <input className="register-input" type="email" id="email" name="email" placeholder="Email" required />

                <label className="register-label" for="password">Password</label>
                <input className="register-input" type="password" id="password" name="password" placeholder="Password" required />

                <label className="register-label" for="repeatpassword">Repeat Password</label>
                <input className="register-input" type="password" id="repeatpassword" name="repeatpassword" placeholder="Repeat Password" required />

                <button className="register-submit" type="submit">Register</button>
            </form>

            <div id="register-extra">
                <p><Link to="/login">I have an account</Link></p>
            </div>
        </DefaultForm>
    );
};

export default Register;
