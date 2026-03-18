import { Link } from "react-router";

import Rating from "./Rating";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card card h-100 bg-light">
      <img src={movie.image} className="card-img" alt="Movie Cover" />
      <div className="card-body d-flex flex-column justify-content-between align-items-start">
        <h5 className="card-title mb-0 movie-title">{movie.title}</h5>
        <div className="card-text movie-year">{movie.release_year}</div>
        <div className="card-text movie-genre">{movie.genre}</div>
        <div className="card-text movie-director">{movie.director}</div>
        <span>
          <Rating vote={movie.average_vote} maxVote="5" />
        </span>
        <Link to={`/${movie.id}`} className="btn btn-dark mt-2">
          See more
        </Link>
      </div>
    </div>
  );
}
