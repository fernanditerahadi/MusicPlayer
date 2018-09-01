import React, { Component } from 'react';

import './Button.css';

class Button extends Component {
    render() {
        return (
            <div
                style={this.props.style}
                className="Button-container">
                <img src={this.props.icon} className="Button" />
            </div>
        );
    }
}


export default Button;