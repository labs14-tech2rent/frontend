import { combineReducers } from 'redux';
import { submitReducer } from './submitReducer';
import { createListReducer } from './createListReducer';
import { getUserIdReducer } from './getUserIdReducer';
import { getItemsReducer } from './getItemsReducer';
import Auth from '../Auth';

const auth = new Auth();
const rootReducer = combineReducers({
  submit: submitReducer,
  createListing: createListReducer,
  getUser: getUserIdReducer,
  getItems: getItemsReducer,
  auth,
});

export default rootReducer;
