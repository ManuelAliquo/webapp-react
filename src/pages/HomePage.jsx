import axios from "axios";
import { useEffect, useState } from "react";

// useContext imports
import { useLoaderContext } from "../contexts/LoaderContext";
import { useNotificationContext } from "../contexts/NotificationContext";

// component imports
import MovieCard from "../components/movies/MovieCard";

export default function HomePage() {
  const { setIsLoading } = useLoaderContext();
  const { setNotificationShow, setAlertFields } = useNotificationContext();

  const [movies, setMovies] = useState([]);

  // movies fetch
  useEffect(fetchMovies, []);

  function fetchMovies() {
    setIsLoading(true);

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/movies`)
      .then((res) => setMovies(res.data.result))
      .catch((err) => {
        setAlertFields({
          type: "danger",
          icon: "exclamation-triangle-fill",
          text: "Failed to load Movies, try again later",
        });
        setNotificationShow(true);
        console.error("Failed to fetch movies:", err);
      })
      .finally(() => setIsLoading(false));
  }

  if (movies.length > 0)
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
