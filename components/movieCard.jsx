import { Link } from "react-router";

export default function MovieCard({ movie }) {
  return (
    <div className="card">
      <img src={movie.image} className="card-img-top" alt="Movie Cover" />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <div className="card-text">
          {movie.genre} - {movie.release_year}
        </div>
        <div className="card-text">{movie.director}</div>
        <Link to={`/${movie.id}`} className="btn btn-primary mt-2">
          See more
        </Link>
      </div>
    </div>
  );
}
