import { combineReducers } from 'redux';
import { submitReducer } from './submitReducer';
import { createListReducer } from './createListReducer';
import { getUserIdReducer } from './getUserIdReducer';

const rootReducer = combineReducers({
  submit: submitReducer,
  createListing: createListReducer,
  getUser: getUserIdReducer,
});

export default rootReducer;
