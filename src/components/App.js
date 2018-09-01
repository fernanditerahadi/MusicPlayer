import React, { Component } from 'react';

import './App.css';

import Header from './Header.js';
import Song from './Song.js';
import Control from './Control.js';

import playIcon from './../assets/images/ic_play.png';
import pauseIcon from './../assets/images/ic_pause.png';

import Songs from './../models/songs.json';

const SONGS = Songs;

class App extends Component {
  state = {
    songs: SONGS.map((song) => ({ ...song, play: false, audio: new Audio(require(".././assets/audios/" + song.url)) })),
    current: 0,
  };

  handler = () => {
    const newSongs = this.state.songs;
    newSongs[this.state.current] = { ...newSongs[this.state.current], play: false };
    this.setState({ songs: newSongs });

  }

  toggleBack = (i) => {
    const newAudio = this.state.songs[i].audio
    newAudio.currentTime = newAudio.currentTime - 10 < 0 ? 0 : newAudio.currentTime - 10;

    const newSongs = this.state.songs;
    newSongs[i] = { ...newSongs[i], audio: newAudio };
    this.setState({ songs: newSongs });
  };

  togglePlay = (i) => {
    const newSongs = this.state.songs.map((song) => ({ ...song, play: false }));
    newSongs[i] = { ...newSongs[i], play: !this.state.songs[i].play };
    this.setState({ songs: newSongs, current: i });
  };

  toggleSeek = (i) => {
    const newAudio = this.state.songs[i].audio
    newAudio.currentTime = newAudio.currentTime + 10 > newAudio.duration ? newAudio.duration : newAudio.currentTime + 10;

    const newSongs = this.state.songs;
    newSongs[i] = { ...newSongs[i], audio: newAudio };
    this.setState({ songs: newSongs });
  };

  render() {
    console.log('songs', this.state.songs)
    return (
      <div className="App">
        <Header />
        {this.state.songs.map((song, i) => (<Song key={i}
          onClick={() => this.togglePlay(i)}
          handler={() => this.handler()}
          object={song} />))}
        <Control
          object={this.state.songs[this.state.current]}
          onBack={() => this.toggleBack(this.state.current)}
          onClick={() => this.togglePlay(this.state.current)}
          onSeek={() => this.toggleSeek(this.state.current)}
          handler={() => this.handler()} />
      </div>
    );
  };
}

export default App;
