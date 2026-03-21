export default function Rating({ vote, maxVote }) {
  function createStars() {
    const stars = [];

    for (let i = 1; i <= maxVote; i++) {
      const starClass = i <= vote ? "bi bi-star-fill text-warning" : "bi bi-star text-warning";
      stars.push(<i key={i} className={starClass}></i>);
    }

    return stars;
  }

  return createStars();
}
