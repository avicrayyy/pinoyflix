import React, { useState, useEffect } from "react";
import axios from "../../adapters/axios";
import "./styles.css";

function Suggestions({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original";
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
      <div className="movie-posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                key={movie.id}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Suggestions;
