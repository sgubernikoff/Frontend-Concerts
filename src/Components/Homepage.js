import React, { useState } from "react";
import music from "../music.mp3";
import ReactAudioPlayer from "react-audio-player";

console.log(music);

function Homepage() {

  const songs = [
    "/static/media/music.c0692109f563108e096a.mp3"
  ];

  const [nextSong, setNextSong] = useState(0);
  function pickNextSong() {
    setNextSong(nextSong + 1);
  }
  return (
    <div className="leftside">
      <img className="groupie" src="groupie.png" />
      <ReactAudioPlayer className="audio"
          src={songs[nextSong]}
          controls
          autoPlay
          onEnded={pickNextSong} />
    </div>
  );
}

export default Homepage;
