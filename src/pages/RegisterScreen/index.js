import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function RegisterScreen() {
  return (
    <div>
      register
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <input type="checkbox" />
      <p>I have read and I agree to the Terms and Services</p>
      <button>Submit</button>
      <p>
        Already a user? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default RegisterScreen;
