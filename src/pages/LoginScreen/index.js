import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function LoginScreen() {
  return (
    <div className="login">
      <div className="login-box">
        <h2>Login</h2>
        <div className="input-field">
          <input type="email" placeholder="email" />
        </div>
        <div className="input-field">
          <input type="password" placeholder="password" />
        </div>
        <button className="btn">Sign In</button>
        <button className="btn btn-google-auth">Sign In with Google</button>
        <button className="btn btn-fb-auth">Sign In with Facebook</button>
        <p>
          New to PinoyFlix? <Link to="/register">Sign-Up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginScreen;
