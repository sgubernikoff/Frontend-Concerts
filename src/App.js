import React, { useState, useEffect } from "react";
import "./App.css";
import SideNav from "./Components/SideNav";

function App() {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/concerts/")
      .then((res) => res.json())
      .then((concerts) => setConcerts(concerts));
  }, []);

  function onCreateProject(newConcert) {
    const matchedConcert = concerts.find((concert) => {
      return concert.id == newConcert.concert_id;
    });
    matchedConcert.reviews.push(newConcert);
    console.log(matchedConcert);
    console.log(matchedConcert.reviews);
    console.log(concerts);
    setConcerts((concerts) => [...concerts, matchedConcert]);
  }

  // if user id matches concert id

  console.log(concerts);

  return (
    <div className="App">
      <video className="theVideo" autoPlay loop muted>
        <source src="Hendrix.mov" type="video/mp4"></source>
      </video>
      <SideNav concerts={concerts} onCreateProject={onCreateProject} />
    </div>
  );
}

export default App;
