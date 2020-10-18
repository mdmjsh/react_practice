import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Icecream from './Person/Icecream'

class App extends Component {
  state = {
    persons:  [
      {name: 'Bob', age: 33, flavour: 'chocolate'},
      {name: 'rob', age: 50, flavour: 'vanilla'},
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.getName(0)} age={this.getAge(0)}><Icecream flavour={this.getFlavour(0)}/></Person>
        <Person name={this.getName(1)} age={this.getAge(1)}>I'm a great guy!!</Person>
      </div>
    );
    // Manually creating the above - the above JSX gets compiled to this
    // return React.createElement('div', {className: 'App'},
    // React.createElement(
    // 'h1', null, "I'm a React App!!!"));
  }
  getAge = (ix) => {
    return this.state.persons[ix].age
  }
  getName = (ix) => {
    return this.state.persons[ix].name
  }
  getFlavour = (ix) => {
    return this.state.persons[ix].flavour
  }
  switchNameHandler = () => {
    console.log('Clicked!')
  }

}

export default App;
