import React, { Component } from 'react';
import Letter from "./Letter";

class Letters extends Component {
    turntrue = (letter) => {
        this.props.turntrue(letter)
    }


    render() {
        let word = this.props.solution.word
        let allLetters = Object.keys(this.props.letterstatus)
        allLetters.map(l => word[l] ? this.turntrue(l) : null)

        return (<div>
            <Letter allLetters={allLetters} />
            {/* letters load the letter ,the letter should have all the single letters */}
        </div>
        )
    }
}
export default Letters