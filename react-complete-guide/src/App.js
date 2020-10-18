import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Icecream from './Person/Icecream'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I'm a React App</h1>
        <Person name="bob" age="33"><Icecream flavour="chocolate"/></Person>
        <Person name="rob" age="50">I'm a great guy!!</Person>
      </div>
    );
    // Manually creating the above - the above JSX gets compiled to this
    // return React.createElement('div', {className: 'App'},
    // React.createElement(
    // 'h1', null, "I'm a React App!!!"));
  }
}

export default App;
