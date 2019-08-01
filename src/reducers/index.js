import { combineReducers } from 'redux';
import { submitReducer } from './submitReducer';
import { createListReducer } from './createListReducer';
import { getUserIdReducer } from './getUserIdReducer';
import Auth from '../Auth';

const auth = new Auth();
const rootReducer = combineReducers({
  submit: submitReducer,
  createListing: createListReducer,
  getUser: getUserIdReducer,
  auth
});

export default rootReducer;

