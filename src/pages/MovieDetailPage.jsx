import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import ReviewsAccordion from "../components/ReviewsAccordion";
import ReviewsForm from "../components/ReviewsForm";

// use contexts
import { useLoaderContext } from "../contexts/LoaderContext";

export default function MovieDetailPage() {
  const { setIsLoading } = useLoaderContext();

  const [movie, setMovie] = useState({});
  const { id } = useParams();

  // movie detail fetch
  useEffect(fetchMovieDetails, []);

  function fetchMovieDetails() {
    setIsLoading(true);

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/movies/${id}`)
      .then((res) => setMovie(res.data.result))
      .catch((err) => console.error("Failed to fetch movie detail:", err))
      .finally(() => setIsLoading(false));
  }

  return (
    <>
      <div className="row g-4">
        <div className="col-12 col-sm-7 col-md-6 col-lg-5 col-xl-4">
          {/* poster */}
          <div className="poster-container mb-2">
            <img className="img-fluid rounded-3" src={movie.image} alt="Movie Cover" />
          </div>
        </div>
        <div className="col-12 col-sm-5 col-md-6 col-lg-7 col-xl-8 movie-info-column">
          {/* infos */}
          <section className="movie-info-sect">
            <div>
              <span className="fs-2 fw-semibold">{movie.title} </span>
              <span>
                - {movie.genre} - {movie.release_year}
              </span>
            </div>
            <div className="director-sect mt-2">
              <span className="fs-5 fw-semibold">Director: </span>
              <span>{movie.director}</span>
            </div>
            <h5 className="mt-2">Description:</h5>
            <p>{movie.abstract}</p>
          </section>
          {/* reviews */}
          <section className="movie-reviews mt-3">
            <ReviewsAccordion movie={movie} />
          </section>
        </div>
        {/* reviews form */}
        <section className="mt-3">
          <ReviewsForm movieId={id} afterFormSubmit={fetchMovieDetails} />
        </section>
      </div>
    </>
  );
}
