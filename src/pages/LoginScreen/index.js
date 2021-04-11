import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function LoginScreen() {
  return (
    <div>
      this be the login screen bish
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
      <button>Sign In</button>
      <p>
        New to PinoyFlix? <Link to="/register">Sign-Up</Link>
      </p>
    </div>
  );
}

export default LoginScreen;
