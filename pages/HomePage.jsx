import { useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/movieCard";

export default function HomePage() {
  useEffect(fetchMovies, []);

  function fetchMovies() {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/movies`)
      .then((res) => {
        console.log(res.data.result);
      })
      .catch((error) => {
        console.error("Failed to fetch movies:", error);
      });
  }

  return (
    <>
      <h1 className="mb-5">Home Page</h1>

      <div className="row row-cols-5">
        <div className="col">
          <MovieCard />
        </div>
      </div>
    </>
  );
}
