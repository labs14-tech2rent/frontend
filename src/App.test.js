import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

import { findByTestAttr } from '../Utils/index';

configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true,
});

const setUp = (props = {}) => {
  const component1 = shallow(<App {...props} />);
  return component1;
};

let component;
beforeEach(() => {
  component = setUp();
});

test('it should render', () => {
  const wrapper = findByTestAttr(component, '.App');
  expect(wrapper.length).toBe(1);
});
