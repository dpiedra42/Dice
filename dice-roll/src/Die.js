import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    render() {
        return (
            <div>
                {/* display dice icon with the number sent through props */}
                <i className={`Die fas fa-dice-${this.props.face} 
                ${this.props.rolling ? 'Die-rolling' : ''}`
                }></i>
            </div>
        );
    }
}

export default Die