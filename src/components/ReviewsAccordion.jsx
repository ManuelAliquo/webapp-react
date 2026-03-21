import Rating from "./Rating";

export default function ReviewsAccordion({ movie }) {
  return (
    <div className="accordion" id="reviewsAccordion">
      {movie.reviews?.map((review) => (
        <div className="accordion-item bg-light" key={review.id}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${review.id}`}
              aria-expanded="false"
              aria-controls={`collapse-${review.id}`}
            >
              <span className="review-username">Review by: {review.username}</span>
            </button>
          </h2>
          <div
            id={`collapse-${review.id}`}
            className="accordion-collapse collapse"
            aria-labelledby="heading"
            data-bs-parent="#reviewsAccordion"
          >
            <div className="accordion-body mb-2">
              <strong>Rating:</strong> {<Rating vote={review.vote} maxVote="5" />}
              <p className="mb-0 mt-1">{review.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
