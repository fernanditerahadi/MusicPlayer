import React, { Component } from 'react';

import './Control.css';

import Button from './Button';

import backIcon from '.././assets/images/ic_back.png'
import seekIcon from '.././assets/images/ic_next.png'
import playIcon from './../assets/images/ic_play.png';
import pauseIcon from './../assets/images/ic_pause.png';



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
                    <p>"{this.props.object.title}"&nbsp;-&nbsp;{this.props.object.artist}</p>
                </span>
                <span className="Control-button-container">
                    <div onClick={this.props.onBack}>
                        <Button style={this.sideButtonSize} icon={backIcon} />
                    </div>
                    <div onClick={this.props.onClick}>
                        <Button style={this.centerButtonSize} icon={!this.props.object.play ? playIcon : pauseIcon} />
                    </div>
                    <div onClick={this.props.onSeek}>
                        <Button style={this.sideButtonSize} icon={seekIcon} />
                    </div>

                </span>
            </div>
        );
    }
}

export default Control;
