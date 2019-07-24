import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

import { findByTestAttr } from '../Utils/index';

// enyzme needs a configuration to run. Have not figured out how to put
// it in its own file.
configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true,
});

// refactor to call setup() instead of the whole component each time
const setUp = (props = {}) => {
  const component1 = shallow(<App {...props} />);
  return component1;
};

let component;
beforeEach(() => {
  component = setUp();
});

// simple test to render the main app page.
test('it should render', () => {
  const wrapper = findByTestAttr(component, '.App');
  expect(wrapper.length).toBe(1);
});
