import React, { Component } from 'react';

import './Song.css';

import Button from './Button.js';
import * as TimeUtils from '.././utils/TimeUtils.js';

import playIcon from './../assets/images/ic_play.png';
import pauseIcon from './../assets/images/ic_pause.png';

class Song extends Component {
  audio = new Audio(require(".././assets/audios/" + this.props.object.url));

  componentDidMount() {
    this.audio.onloadedmetadata = () => {
      this.setState({ duration: this.audio.duration });
    }
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps.object.play, this.props.object.play);
    if (!prevProps.object.play && this.props.object.play) {
      this.audio.play();
    } else if (prevProps.object.play && !this.props.object.play) {
      this.audio.pause();
    }
  }

  render() {
    const formattedDuration = TimeUtils.getFormattedDuration(this.audio.duration);
    return (
      <div className="Song">
        <div className="Song-container">
          <p className="Song-id">{this.props.object.id}.</p>
          <div className="Song-titleartist-container">
            <p className="Song-title">{this.props.object.title}</p>
            <p className="Song-artist">{this.props.object.artist}</p>
          </div>
          <div className="Song-duration-container">
            <p className="Song-duration">{formattedDuration}</p>
          </div>
          <div onClick={this.props.onClick}>
            <Button icon={!this.props.object.play ? playIcon : pauseIcon} />
          </div>
        </div>
        <div className="Song-seperator" />
      </div>
    );
  }
}

export default Song;
