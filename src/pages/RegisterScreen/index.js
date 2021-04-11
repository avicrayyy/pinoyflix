import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function RegisterScreen() {
  return (
    <>
      <div className="register">
        <div className="register-box">
          <h2>register</h2>
          <div className="input-field">
            <input type="text" placeholder="First Name" />
          </div>
          <div className="input-field">
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="input-field">
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-field">
            <input type="password" placeholder="Password" />
          </div>
          <div className="input-field">
            <input type="password" placeholder="Confirm Password" />
          </div>
          <div className="input-field">
            <input type="checkbox" />
            <p>I have read and I agree to the Terms and Services</p>
          </div>
          <button className="btn">Submit</button>
          <p>
            Already a user? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default RegisterScreen;
