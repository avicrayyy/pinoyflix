import React from "react";
import "./styles.css";

import Nav from "../../components/Nav";
import Banner from "../../components/Banner";
import Search from "../../components/Search";
import Suggestions from "../../components/Suggestions";

import requests from "../../adapters/Requests";

function HomeScreen() {
  return (
    <div className="home-screen">
      {/* <Search /> */}
      <Nav />
      <div className="content">
        <Banner />
        <Suggestions
          title="Movies"
          fetchUrl={requests.fetchPinoyMovies}
          isLargeRow={true}
        />
        <Suggestions title="TV Shows" fetchUrl={requests.fetchPinoyTV} />
        <footer>
          &copy; 2021 Project by{" "}
          <a href="https://daviddomingo.netlify.app/" target="_blank">
            David Domingo
          </a>
        </footer>
      </div>
    </div>
  );
}

export default HomeScreen;
