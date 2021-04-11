import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import SplashScreen from "./pages/SplashScreen";

function App() {
  const user = null;

  return (
    <Router>
      <div className="App">
        <Switch>
          {!user ? (
            <>
              <Route exact path="/">
                <SplashScreen />
              </Route>
              <Route path="/login">
                <LoginScreen />
              </Route>
              <Route path="/register">
                <RegisterScreen />
              </Route>
            </>
          ) : (
            <>
              <Route exact path="/">
                <HomeScreen />
              </Route>
            </>
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
