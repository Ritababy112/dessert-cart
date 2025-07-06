import React, { useState } from "react";
import "./Styles.css";

const Review = () => {
  const [reviews, setReviews] = useState([
    { name: "Rita", text: "Absolutely delicious! Will definitely order again." },
    { name: "Daniel", text: "The best waffles I’ve had in years. 10/10!" },
  ]);

  const [form, setForm] = useState({ name: "", text: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.text) {
      setReviews([{ name: form.name, text: form.text }, ...reviews]);
      setForm({ name: "", text: "" });
    }
  };

  return (
    <div className="page-container">
      <h2>Customer Reviews</h2>

      <form onSubmit={handleSubmit} className="review-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="text"
          placeholder="Your Review"
          rows="4"
          value={form.text}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Review</button>
      </form>

      <div className="review-list">
        {reviews.map((r, i) => (
          <div key={i} className="review">
            <p>🧁 {r.text}</p>
            <span>- {r.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
