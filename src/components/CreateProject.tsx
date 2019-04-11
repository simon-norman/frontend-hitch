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
    await this.props.projectApi.createProject(this.state);
  }

  handleChange = (name: string) => {
    return (event: any) => {
      this.setState({[name]: event.target.value})
    }
  }

  render() {
    return (
      <div className="project">
          <TextField
            label="Name"
            className='project-name'
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
        <Button onClick={this.createProject} className='create-project' variant="contained" color="secondary">Click me!</Button>
      </div>
    );
  }
}

export default CreateProject;
