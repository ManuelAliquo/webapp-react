import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function DetailPage() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  // movie fetch
  useEffect(fetchMovie, []);
  function fetchMovie() {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/movies/${id}`)
      .then((res) => {
        setMovie(res.data.result);
      })
      .catch((error) => {
        console.error("Failed to fetch movies:", error);
      });
  }

  return (
    <div className="row">
      <div className="col-4">
        <img className="img-fluid" src={movie.image} alt="Movie Cover" />
      </div>
      <div className="col-8">
        {/* infos */}
        <section className="movie-info">
          <h3>{movie.title}</h3>
          <h5 className="mt-3">Genre and Year:</h5>
          <div>
            {movie.genre} - {movie.release_year}
          </div>
          <h5 className="mt-3">Director:</h5>
          <div>{movie.director}</div>
          <h5 className="mt-3">Description:</h5>
          <p>{movie.abstract}</p>
        </section>
        {/* reviews */}
        <section className="movie-reviews">
          <div className="accordion mt-4" id="reviewsAccordion">
            {movie.reviews?.map((review) => (
              <div className="accordion-item" key={review.id}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${review.id}`}
                    aria-expanded="false"
                    aria-controls={`collapse-${review.id}`}
                  >
                    Review by: {review.name}
                  </button>
                </h2>
                <div
                  id={`collapse-${review.id}`}
                  className="accordion-collapse collapse"
                  aria-labelledby="heading"
                  data-bs-parent="#reviewsAccordion"
                >
                  <div className="accordion-body">
                    <div className="mb-2">
                      <strong>Rating:</strong> {review.vote}/5
                    </div>
                    <p>{review.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
