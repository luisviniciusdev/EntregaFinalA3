import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

import DefaultForm from "../../components/DefaultForm";

const Login = () => {
    return (
        <DefaultForm>
            <form id="login-form">
                <label className="login-label" for="username">Username</label>
                <input className="login-input" type="text" id="username" name="username" placeholder="Username" required />

                <label className="login-label" for="password">Password</label>
                <input className="login-input" type="password" id="password" name="password" placeholder="Password" required />

                <button className="login-submit" type="submit">Start</button>
            </form>

            <div id="login-extra">
                <p><Link to="/register">Create an account</Link></p>
                <p><Link to="#">Help, I can't sign in</Link></p>
            </div>
        </DefaultForm>
    );
};

export default Login;
