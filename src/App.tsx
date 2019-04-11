import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateProject from './components/CreateProject';
import axios from 'axios';
import newProjectApi from './services/projectApi';
import './App.css';

const projectApi = newProjectApi({ apiProvider: axios })

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route 
              path='/project/new' 
              render={(props) => <CreateProject {...props} projectApi={projectApi}/>}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
