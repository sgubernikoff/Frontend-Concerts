import React, { useState } from "react";
import Card from "./Card";

function Concert({ concerts }) {
  console.log(concerts);
  const display = concerts.map((item) => <Card key={item.id} item={item} />);
  return <div className="rightside">{display}</div>;
}

export default Concert;
