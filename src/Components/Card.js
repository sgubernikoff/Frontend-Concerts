import React, { useState } from "react";

function Card({ item }) {
  // function handleClick() {

  //   }

  console.log(item);
  return (
    <div className="card">
      <h2>{item.concert_id}</h2>
      <h3>{item.user_id}</h3>
      <h3>{item.concert_rating}</h3>
      <h3>{item.comment}</h3>
    </div>
  );
}

export default Card;
