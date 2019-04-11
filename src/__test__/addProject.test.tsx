import React, { Component } from 'react';
import { mount } from 'enzyme';
import CreateProject from '../components/CreateProject';
import ProjectApi from '../services/projectApi';

const AxiosMock = {
  create: () => {
    return  { 
      post: () => {
        console.log('wheeeeeee!')
      }
    }
  }
}

const projectApi = new ProjectApi({ apiProvider: AxiosMock })

it('should post a new project', () => {
  const wrapper = mount(<CreateProject projectApi={projectApi} />);
  wrapper.find('.project-name').simulate('change', {
    target: { value: 'New project' }
  })
  wrapper.find('.submit').simulate('click');
});