import Letter from "./Letter";
import React, { Component } from 'react';

class Solution extends Component {




    render() {

        let nothing = ['_ ', '_ ', '_ ', '_']
        let word = Object.keys(this.props.solution.word)
        



        return (<div>
            <div>{this.props.letterstatus === true ? word : nothing}</div>
            <div>hint: {this.props.solution.hint}</div>

        </div>

            //    also display the hint
        )
    }
}
export default Solution