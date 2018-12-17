import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const helloWorld = 'Welcome to the Road to learn React';
    const user = {
      firstName: 'Mauro',
      lastName: 'Bono'
    };
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <p>
          My name is: {user.firstName} {user.lastName}
        </p>
      </div>
    );
  }
}

export default App;
