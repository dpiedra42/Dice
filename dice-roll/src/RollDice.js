import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    };
    constructor(props) {
        super(props);
        this.state = { 
            dice1 : "one" ,
            dice2 : "two"
        };
        this.ranDie = this.ranDie.bind(this);
    }
    ranDie() {
        const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        this.setState({dice1 : newDie1 , dice2 : newDie2});
    }
    render() {
        return (
            <div>
                <div className="RollDice" >
                    <Die face={this.state.dice1}/>
                    <Die face={this.state.dice2}/>
                </div>
                <button onClick={this.ranDie}>Roll Dice</button>
            </div>
        );
    }
}

export default RollDice