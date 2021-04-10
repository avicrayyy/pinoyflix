import React, { useState, useEffect } from "react";
import axios from "../../adapters/axios";
import "./styles.css";

function Suggestions({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="suggestions">
      <h2>{title}</h2>
      {movies.map((movie) => (
        <img
          src={`https://image.tmdb.org/t/p/original/` + movie?.poster_path}
          alt=""
        />
      ))}
    </div>
  );
}

export default Suggestions;
