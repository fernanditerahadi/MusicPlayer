import React, { Component } from 'react';

import './Header.css';

import logo from '.././assets/images/header-logo.png'

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img src={logo} className="Header-logo" alt="Music Player" />
                <h1 className="Header-Title">Music Player</h1>
            </div>
        );
    }
}

export default Header;