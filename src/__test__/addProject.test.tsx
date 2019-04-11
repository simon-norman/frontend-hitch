import React, { Component } from 'react';
import { mount } from 'enzyme';
import CreateProject from '../components/CreateProject';
import newProjectApi from '../services/projectApi';

const mockPost = jest.fn()
const AxiosMock = {
  create: () => {
    return  { 
      post: mockPost
    }
  }
}

const projectApi = newProjectApi({ apiProvider: AxiosMock })

it('should post a new project', () => {
  const wrapper = mount(<CreateProject projectApi={projectApi} />);
  wrapper.find('.project-name input').simulate('change', {
    target: { value: 'New project' }
  })
  wrapper.find('.create-project button').simulate('click');

  expect(mockPost).toHaveBeenNthCalledWith(
    1, 
    '/project', 
    { name: 'New project' }
  )
});