import React, { Component } from 'react';
import RollDice from './RollDice';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Deanna's Dice Roller</h1>
                <RollDice />
            </div>
        );
    }
}

export default App
