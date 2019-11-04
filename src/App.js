import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person mame='Max' age='28'/>
        <Person mame='Manu' age='29'>My Hobbies: Racing </Person>
        <Person mame='Stephanie' age='26'/>
      </div>
    );
  }
}

export default App;
