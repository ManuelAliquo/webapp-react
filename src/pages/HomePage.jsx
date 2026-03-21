import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  // movies fetch
  useEffect(fetchMovies, []);

  function fetchMovies() {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/movies`)
      .then((res) => setMovies(res.data.result))
      .catch((err) => console.error("Failed to fetch movies:", err));
  }

  return (
    <>
      <h1 className="mb-4">Movies List</h1>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-3">
        {movies.map((movie) => (
          <div className="col" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
}
