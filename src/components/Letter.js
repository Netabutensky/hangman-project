import React, { Component } from 'react';

class Letter extends Component {
    render() { 
       
        
        return (
       <div>
           
           <div>availble letters</div>
           {this.props.allLetters.map(m=> <span className={m}>{m}</span>)}
       </div>
        )
    }
}
export default Letter
