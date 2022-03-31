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
      })
      .then(() => {
        window.location.reload();
      });

    setFormState({
      user_id: "",
      concert_id: "",
      concert_rating: "",
      comment: "",
    });
  };

  return (
    <div className="rightsider">
      <div className="form-box">
        <section>
          <form className="form" onSubmit={handleSubmit}>
            <div className="field1">
              <h3>Add Review</h3>

              <label htmlFor="user_id">Username</label>
              <div className="selectWrapper">
                <select
                  className="selectBox"
                  required
                  type="text"
                  id="user_id"
                  name="user_id"
                  onChange={handleChange}
                  value={formState.user_id}
                >
                  <option value=""> Select Username</option>
                  <option value="1">billyboy69</option>
                  <option value="2">whydmywifeleave</option>
                  <option value="3">oldDOG</option>
                  <option value="4">brislord13</option>
                  <option value="5">musicEnjoyer5</option>
                  <option value="6">tedbundyfan00</option>
                  <option value="7">crust!</option>
                  <option value="8">Ted Cruz</option>
                </select>
              </div>

              <label htmlFor="concert_id">Concert</label>
              <div className="selectWrapper">
                <select
                  className="selectBox"
                  required
                  type="text"
                  id="concert_id"
                  name="concert_id"
                  onChange={handleChange}
                  value={formState.concert_id}
                >
                  <option value=""> Select Concert</option>
                  <option value="1">Jimi Hendrix</option>
                  <option value="2">John Mayer</option>
                  <option value="3">Don Toliver</option>
                  <option value="4">Insane Clown Posse</option>
                  <option value="5">Usher</option>
                  <option value="6">John Cena</option>
                  <option value="7">Future</option>
                  <option value="8">Willy Blanco</option>
                </select>
              </div>

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
                <textarea
                  rows="8"
                  cols="25"
                  type="text"
                  id="comment"
                  name="comment"
                  onChange={handleChange}
                  value={formState.comment}
                />
              </div>
            </div>
            <div className="wrap">
              <button className="button">Submit</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Review;
