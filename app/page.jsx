"use client";

import React, { useState } from "react";

function page() {
  const [play, setplaying] = useState(0);
  const [level, setLevel] = useState(1);
  function playingFunction() {
    // console.log("play Btn clicked");
    setplaying((prevCount) => prevCount + 5);
    IncreasingLevel();
  }
  function IncreasingLevel() {
    if (play == "20") {
      setLevel((prevPlayCount) => prevPlayCount + 1);
      // play >= 20 && setLevel((prevPlayCount) => prevPlayCount + 1);
    } else if (play == "50") {
      setLevel((prevPlayCount) => prevPlayCount + 1);
    } else if (play == "200") {
      return (window.location.href = "/game");
    }
  }

  return (
    <div>
      <h1 className="level">Level {level}</h1>
      <section className="Mainsection">
        <div className="scoreDiv">
          <h4 className="scoreHd">Score</h4>
          <p className="ScoreNumber">{play}</p>
        </div>
        <button className="PlayBtn" onClick={playingFunction}>
          Play
        </button>
      </section>
    </div>
  );
}

export default page;
