import { Link } from "react-router";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card card h-100">
      <img src={movie.image} className="card-img" alt="Movie Cover" />
      <div className="card-body d-flex flex-column justify-content-between align-items-start">
        <h5 className="card-title text-center mb-0">{movie.title}</h5>
        <div className="card-text">
          {movie.genre} - {movie.release_year}
        </div>
        <div className="card-text">{movie.director}</div>
        <Link to={`/${movie.id}`} className="btn btn-dark mt-2">
          See more
        </Link>
      </div>
    </div>
  );
}
