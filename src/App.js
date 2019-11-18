//stateful, smart, container
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = ( newName ) => {
    console.log('cc: src/App.js :App:switchNameHandler was called!');
    //DON"T DO THIS: this.state.persons[0].name='Maximilian';
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27}
      ]
    })
  }

  nameChangedHandler = (event) => {
    console.log('cc: src/App.js :App:nameChangedHandler was called!');
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 26}
      ], 
      showPersons: false
    })

  }

  togglePersonsHandler = () =>  {
    const doesShow = this.state.showPersons;
    //below line sets showPersons to the opposite of what it currently is
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style} 
          onClick={ this.togglePersonsHandler }>Switch Name</button> {/*can be inefficient. Use bind instead*/}
          {//check if showPersons : true. If true, render personsContainer div. Else, render nothing.}
        { this.state.showPersons ? 
          <div className='personsContainer'>
          <Person 
            name={ this.state.persons[0].name } 
            age={ this.state.persons[0].age }
          />
          <Person 
            name={ this.state.persons[1].name } 
            age={ this.state.persons[1].age }
            click={ this.switchNameHandler.bind(this, 'Max!') } 
            changed={ this.nameChangedHandler } >
              My Hobbies: Racing 
          </Person>
          <Person 
            name={ this.state.persons[2].name } 
            age={ this.state.persons[2].age }
          />
        </div> : null
        }
      </div>
    );
  }
}

export default App;

