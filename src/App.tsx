import React, { Component } from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Button variant="contained" color="secondary">Click me!</Button>
      </div>
    );
  }
}

export default App;
