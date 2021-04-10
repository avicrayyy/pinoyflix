import React, { useState, useEffect } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";

import axios from "../../adapters/axios";
import requests from "../../adapters/Requests";

import "./styles.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchPinoyMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${
            movie?.backdrop_path || movie?.poster_path
          }")`,
          backgroundPosition: "center center",
          position: "relative",
          height: "80vh",
          color: "white",
          objectFit: "contain",
        }}
      >
        <div className="banner-content">
          <div className="banner-title">
            <h1>{movie?.original_title}</h1>
          </div>
          <div className="banner-description">
            {truncate(movie?.overview, 150)}
          </div>
          <div className="banner-buttons">
            <button className="play-button">
              <BsFillPlayFill />
              Play
            </button>
            <button className="list-button">
              <AiOutlineInfoCircle />
              Add to List
            </button>
          </div>
        </div>
        <div className="banner-bottom-fade" />
      </header>
    </>
  );
}

export default Banner;
