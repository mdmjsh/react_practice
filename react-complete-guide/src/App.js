import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Icecream from './Person/Icecream'

class App extends Component {
  state = {
    persons:  [
      {name: 'Bob', age: 33},
      {name: 'rob', age: 50},
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>I'm a React App</h1>
        <button>Switch Name</button>
        <Person name={this.get_name(0)} age={this.get_age(0)}><Icecream flavour="chocolate"/></Person>
        <Person name={this.get_name(1)} age={this.get_age(1)}>I'm a great guy!!</Person>
      </div>
    );
    // Manually creating the above - the above JSX gets compiled to this
    // return React.createElement('div', {className: 'App'},
    // React.createElement(
    // 'h1', null, "I'm a React App!!!"));
  }
get_age(ix) {
  return this.state.persons[ix].age
}
get_name(ix) {
  return this.state.persons[ix].name
}

}

export default App;
