import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const helloWorld = 'Welcome to my Road to Learn React';
    const user = {
      firstName: 'Mauro',
      lastName: 'Bono'
    };
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <p>
          My name is: <strong>{user.firstName}</strong> <strong>{user.lastName}</strong>
        </p>
      </div>
    );
  }
}

export default App;
