import React, { Component } from 'react';

class Score extends Component {
    render() {
        return (
        <div>score: {this.props.score}</div> 
        )
    } 
    // it will keep track of how many guesses the user has left
}
export default Score