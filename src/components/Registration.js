import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Registration.css";


function Registration() {
    return (
        <div>
            <h1>Sign-up</h1>
            <form action="submit">
                <div>
                    <input type="text" name="fullname" />
                    <label >Full Name</label>
                </div>
                <div>
                    <input type="email" name="email" />
                    <label >Email</label>
                </div>
                <div>
                    <input type="tel" name="tel" />
                    <label >Phone Number</label>
                </div>
                <div>
                    <input type="password" name="password" />
                    <label >Password</label>
                </div>
                <button type="submit">Create Account</button>
                <div className="have">
                    Already have Account? <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Registration;