import React, { useState, useEffect } from "react";
import "./App.css";
import SideNav from "./Components/SideNav";

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/reviews/")
      .then((res) => res.json())
      .then((reviews) => setReviews(reviews));
  }, []);

  function onCreateProject(newReview) {
    setReviews((reviews) => [...reviews, newReview]);
  }

  return (
    <div className="App">
      <video className="theVideo" autoPlay loop muted>
        <source src="Hendrix.mov" type="video/mp4"></source>
      </video>
      <SideNav reviews={reviews} onCreateProject={onCreateProject} />
    </div>
  );
}

export default App;
