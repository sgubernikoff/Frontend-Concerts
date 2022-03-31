import React, { useState } from "react";
import music from "../music.mp3";
import september from "../september.mp3"
import ReactAudioPlayer from "react-audio-player";
import pornhub from "../pornhub.mp3"

console.log(september);
console.log(pornhub);

function Homepage() {

  const songs = [
    "/static/media/pornhub.a303a3293a3306e99436.mp3",
    "/static/media/september.56eadbba04f59f05b1bb.mp3",
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
