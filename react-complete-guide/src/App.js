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
        <button>Switch Name</button>
        <Person name={this.get_name(0)} age={this.get_age(0)}><Icecream flavour={this.get_flavour(0)}/></Person>
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
  get_flavour(ix) {
    return this.state.persons[ix].flavour
  }

}

export default App;
