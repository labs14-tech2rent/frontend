/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// working on trying to call this instead of writing the adapter for each
// test page.
configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true,
});
