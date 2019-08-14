import { combineReducers } from 'redux';
import { submitReducer } from './UsersReducers/submitReducer';
import { createListReducer } from './ListingReducers/createListReducer';
import { getUserIdReducer } from './UsersReducers/getUserIdReducer';
import Auth from '../Auth';

const auth = new Auth();
const rootReducer = combineReducers({
  submit: submitReducer,
  createListing: createListReducer,
  getUser: getUserIdReducer,
  auth,
});

export default rootReducer;
