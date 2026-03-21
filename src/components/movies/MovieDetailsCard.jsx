export default function MovieDetailCard({ movie }) {
  return (
    <div className="card p-3 bg-light">
      <div className="border-bottom">
        <span className="fs-2 fw-semibold">{movie.title} </span>
        <span>
          - {movie.genre} - {movie.release_year}
        </span>
      </div>
      <div className="director-sect mt-2">
        <span className="fs-5 fw-semibold">Director: </span>
        <span>{movie.director}</span>
      </div>
      <span className="fs-5 fw-semibold mt-2">Description:</span>
      <p>{movie.abstract}</p>
    </div>
  );
}
