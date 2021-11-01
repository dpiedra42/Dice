import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    // array from which we will randomly pull a value when rolling
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    };
    constructor(props) {
        super(props);
        // setting states: two dice and rolling to false
        this.state = { 
            dice1 : "one" ,
            dice2 : "two" ,
            rolling : false
        };
        //binding ranDie so we can use this in the function
        this.ranDie = this.ranDie.bind(this);
    }
    ranDie() {
        // get a random number and using the to select from the array
        const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        // setting the new values with the item chosen from the array
        this.setState({dice1 : newDie1 , dice2 : newDie2 , rolling : true});
        //after 1 sec the status of rolling will go back to false
        setTimeout(() => {
            this.setState({rolling : false})
        }, 1000);
    }
    render() {
        return (
            <div>
                <div className="RollDice">
                    {/* compnent for displaying icons and shaking the dice */}
                    <Die face={this.state.dice1} rolling={this.state.rolling}/>
                    <Die face={this.state.dice2} rolling={this.state.rolling}/>
                </div>
                {/* button for rolling the dice, displaying a new message on the button when rolling
                    and disabling the button while rolling */}
                <button className="RollDice-button" onClick={this.ranDie} disabled={this.state.rolling}>
                    {this.state.rolling ? "Rolling..." : "Roll Dice!"}
                </button>
            </div>
        );
    }
}

export default RollDice