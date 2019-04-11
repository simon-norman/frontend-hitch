import React, { Component } from 'react';
import { mount } from 'enzyme';
import CreateProject from '../components/CreateProject';
import axios from 'axios';

jest.mock('axios');

it('should post a new project', () => {
  const wrapper = mount(<CreateProject />);
  wrapper.find('.project-name').simulate('change', {
    target: { value: 'New project' }
  })
  wrapper.find('.submit').simulate('click');

  expect(axios.default.mock.calls).toEqual('');
});