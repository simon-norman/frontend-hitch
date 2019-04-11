import React, { Component } from 'react';
import { mount } from 'enzyme';
import App from '../src/App';
import './setupTests';

it('should post a new project', () => {
  const wrapper = mount(<App />);
  mockXHR.onreadystatechange();
  expect(postCall).toEqual(newProject);
});