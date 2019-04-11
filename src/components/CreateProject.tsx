import React, { Component, ObjectHTMLAttributes } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import projectApi from '../services/projectApi';

interface Props {
  projectApi: {
    createProject(params: object): any;
  };
}

interface State {
  name?: string;
};

class CreateProject extends Component<Props, State> {
  state: State = {
    name: ''
  }

  createProject = async (event: any) => {
    event.preventDefault();
    await this.props.projectApi.createProject({ project: this.state });
  }

  handleChange = (event: any) => {
    const name = event.target.name
    const value = event.target.value
  
    this.setState({[name]: value})
  }

  render() {
    return (
      <div className="project">
          <TextField
            label="Name"
            className='name'
            name='message' 
            value={this.state.name}
            onChange={this.handleChange}
            margin="normal"
          />
        <input type='submit' className="btn btn-outline-primary new-post-submit"/>
        <Button onClick={this.createProject} className='create-project' variant="contained" color="secondary">Click me!</Button>
      </div>
    );
  }
}

export default CreateProject;
