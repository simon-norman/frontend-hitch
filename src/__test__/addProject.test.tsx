import React, { Component } from 'react';
import { mount } from 'enzyme';
import CreateProject from '../components/CreateProject';
import newProjectApi from '../services/projectApi';

describe('Adding projects', () => {
  let mockPost: any;
  let projectApi: any;

  beforeAll(() => {
    mockPost = jest.fn()
    const AxiosMock = {
      create: () => {
        return  { 
          post: mockPost
        }
      }
    }

    projectApi = newProjectApi({ apiProvider: AxiosMock })
  })
  
  it('should post a new project', () => {
    const wrapper = mount(<CreateProject projectApi={projectApi} />);

    wrapper.find('.project-name input').simulate('change', {
      target: { value: 'New project' }
    });
    wrapper.find('.create-project button').simulate('click');
  
    expect(mockPost).toHaveBeenNthCalledWith(
      1, 
      '/project', 
      { name: 'New project' }
    )
  });
})