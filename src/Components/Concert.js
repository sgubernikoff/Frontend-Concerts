import React, { useState } from "react";
import Card from "./Card";

function Concert({ reviews }) {
  console.log(reviews);
  const display = reviews.map((item) => <Card key={item.id} item={item} />);
  return <div className="rightside">{display}</div>;
}

export default Concert;
