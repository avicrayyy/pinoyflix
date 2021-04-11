import React from "react";
import { Link } from "react-router-dom";

function SplashScreen() {
  return (
    <div>
      <Link to="/login">login</Link> or die
    </div>
  );
}

export default SplashScreen;
