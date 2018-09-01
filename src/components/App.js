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
    songs: SONGS.map((song) => ({...song, play:false}))
  };

  togglePlay = (i) => {
    const newSongs = this.state.songs.map((song) => ({...song, play:false}));
    newSongs[i] = { ...newSongs[i], play: !this.state.songs[i].play};
    this.setState({songs: newSongs});
  }

  render() {
    console.log('songs', this.state.songs)
    return (
      <div className="App">
        <Header />
        {this.state.songs.map((song,i) => (<Song key={i} onClick={() => this.togglePlay(i)} object={song} />))}
        <Control button={this.state.play ? playIcon : pauseIcon}/>
      </div>
    );
  }
}

export default App;
