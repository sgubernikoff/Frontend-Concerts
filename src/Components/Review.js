import React, { useState } from "react";

function Review({ onCreateProject }) {
  const [formState, setFormState] = useState({
    user_id: "",
    concert_id: "",
    concert_rating: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((formState) => ({ ...formState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:9292/reviews/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((res) => res.json())
      .then((savedReview) => {
        onCreateProject(savedReview);
        console.log(savedReview);
      });
  };

  console.log(JSON.stringify(formState));

  return (
    <div className="rightsider">
      <div className="form-box">
        <section>
          <form className="form" onSubmit={handleSubmit}>
            <div className="field1">
              <h3>Add Review</h3>

              <label htmlFor="user_id">Username</label>
              <input
                type="text"
                id="user_id"
                name="user_id"
                onChange={handleChange}
                value={formState.user_id}
              />

              <label htmlFor="concert_id">Concert</label>
              <input
                type="text"
                id="concert_id"
                name="concert_id"
                onChange={handleChange}
                value={formState.concert_id}
              />

              <label htmlFor="concert_rating">Star Rating</label>
              <div className="selectWrapper">
                <select
                  className="selectBox"
                  required
                  name="concert_rating"
                  id="concert_rating"
                  onChange={handleChange}
                  value={formState.concert_rating}
                >
                  <option value=""> Select Stars</option>
                  <option value="1">⭐</option>
                  <option value="2">⭐⭐</option>
                  <option value="3">⭐⭐⭐</option>
                  <option value="4">⭐⭐⭐⭐</option>
                  <option value="5">⭐⭐⭐⭐⭐</option>
                </select>
              </div>
              <div className="commentbox">
                <label htmlFor="comment">Comment</label>
                <input
                  type="text"
                  id="comment"
                  name="comment"
                  onChange={handleChange}
                  value={formState.comment}
                />
              </div>
            </div>
            <div class="wrap">
              <button class="button">Submit</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Review;
