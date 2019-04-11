import React, { Component } from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {
  constructor(props: object) {
    super(props);
    this.state = {};
  }

  getPosts = () => {
    console.log('stuff!')
    this.setState({ data: 'more stuff' })
  }

  render() {
    return (
      <div className="App">
        <Button onClick={this.getPosts} className='stuff' variant="contained" color="secondary">Click me!</Button>
      </div>
    );
  }
}

export default App;
