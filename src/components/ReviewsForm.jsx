import axios from "axios";
import { useState } from "react";

const initialFormData = {
  name: "",
  vote: "",
  text: "",
};

export default function ReviewsForm({ movieId, afterFormSubmit }) {
  const [formData, setFormData] = useState(initialFormData);

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/movies/${movieId}/review`, formData)
      .then((res) => afterFormSubmit())
      .catch((err) => console.error("Failed to send review:", err));

    setFormData(initialFormData);
  };

  return (
    <>
      <form onSubmit={formSubmit} className="card rounded-3">
        <div className="card_header rounded-top-3 bg-dark text-white p-3">
          <h2 className="mb-1">Leave a Review</h2>
        </div>
        {/* form inputs */}
        <div className="card_body bg-light p-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            value={formData.name}
            onChange={handleFormChange}
            name="name"
            //
            className="form-control mb-2"
            type="text"
            id="name"
          />
          <label className="form-label" htmlFor="vote">
            Vote
          </label>
          <input
            value={formData.vote}
            onChange={handleFormChange}
            name="vote"
            //
            className="form-control mb-2"
            type="number"
            id="vote"
            min={1}
            max={5}
          />
          <label className="form-label" htmlFor="text">
            Text
          </label>
          <textarea
            value={formData.text}
            onChange={handleFormChange}
            name="text"
            //
            className="form-control"
            type="text"
            id="text"
          />
          <div className="d-flex justify-content-end pt-3 pe-3">
            <button className="btn btn-secondary">Send review</button>
          </div>
        </div>
      </form>
    </>
  );
}
