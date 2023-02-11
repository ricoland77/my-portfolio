import React, { Component } from "react";

import home from "../music/home.mp3";
import play from "../img/picto-play.png";
import slash from "../img/slash.png";
import stop from "../img/picto-break.png";

class SoundA extends Component {
  state = {
    audio: new Audio(home),
    isPlaying: false,
  };

  playPause = () => {
    let isPlaying = this.state.isPlaying;
    if (isPlaying) {
      this.state.audio.pause();
    } else {
      this.state.audio.play();
    }
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
      <div className="player">
        <button className="btn-player" onClick={this.playPause}>
          <img className="pictos-sound" src={play} alt="picto play" />
          <img className="pictos-sound" src={slash} alt="picto slash" />
          <img className="pictos-sound" src={stop} alt="picto pause" />
        </button>
      </div>
    );
  }
}

export default SoundA;
