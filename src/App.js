import React, { Component } from 'react';
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';

import './App.css';


class App extends Component {
   constructor() {
      super()

      this.state = {
         letterStatus: this.generateLetterStatuses(),
         solution: {
            word: { L: true, O: true, V: true, E: true },
            hint: "when you have butterflies it means you feel:"

         },
         score: "50"

      }

   }
   turntrue = (letter) => {
      const newallletter = { ...this.state.letterStatus }
      newallletter[letter] = true
      this.setState({ letterStatus: newallletter })
    
   }

   generateLetterStatuses = () => {
      let letterStatus = {}
      for (let i = 65; i < 91; i++) {
         letterStatus[String.fromCharCode(i)] = false

      }
      return letterStatus


   }




   render() {
      return (
         <div>
            <Score score={this.state.score} />
            <Solution turntrue={this.turntrue} solution={this.state.solution} letterstatus={this.state.letterStatus} />
            <Letters turntrue={this.turntrue} solution={this.state.solution} letterstatus={this.state.letterStatus} />
         </div>
      )
   }
} export default App
