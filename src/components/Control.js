import React, { Component } from 'react';

import './Control.css';

import Button from './Button';

import backIcon from '.././assets/images/ic_back.png'
import nextIcon from '.././assets/images/ic_next.png'



class Control extends Component { 
    sideButtonSize = {
        width: 55,
        height: 55
    };

    centerButtonSize = {
        width: 85,
        height: 85
    };

    render() {
        return (
            <div className="Control">
                <span className="Control-info-container">
                    <p>"No Tears Left to Cry"&nbsp;-&nbsp;Ariana Grande</p>
                </span>
                <span className="Control-button-container">
                <Button style={this.sideButtonSize} icon={backIcon}/>
                <Button style={this.centerButtonSize} icon={this.props.button}/>
                <Button style={this.sideButtonSize} icon={nextIcon}/>
                </span>
            </div>
        );
    }
}

export default Control;
