import React, { useState, Component } from "react";
import Carousel from "react-elastic-carousel";

function Card({ item }) {
  const [reviews, setReviews] = useState(item.reviews);
  console.log(item);

  const mapReview = reviews.map((review) => (
    <div key={review.comment} className="back">
      <h1>{"⭐".repeat(review.concert_rating)}</h1>
      <h3>{review.user.username}:</h3>
      <p>{review.comment}</p>
      <button
        className="remove"
        onClick={function handleDelete() {
          fetch(`http://localhost:9292/reviews/${review.id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          })
            .then((resp) => resp.json())
            .then(() =>
              setReviews(reviews.filter((item) => review.id !== item.id))
            );
        }}
      >
        Remove Review
      </button>
    </div>
  ));

  return (
    <div className="card">
      <img className="front" src={item.gif} />
      <Carousel>{mapReview}</Carousel>
    </div>
  );
}

export default Card;
