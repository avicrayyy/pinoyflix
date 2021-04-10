import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import HomeScreen from "./pages/HomeScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <HomeScreen />
      </div>
    </Router>
  );
}

export default App;
