import { combineReducers } from 'redux';
import { submitReducer } from './submitReducer';
import { createListReducer } from './createListReducer';

// const initialState = {
//   users: [],
//   isLoggingIn: false,
//   error: false,
//   isLoading: false,
//   pending: false,
//   submitFail: false,
//   credentials: [],
//   newUser: false,
//   user: {},
//   loggedIn: false,
//   auth,
//   creatingListing: false,
//   listing: [],

//   // Array characters, Boolean fetching, null error.
// };

// Array characters, Boolean fetching, null error.

const rootReducer = combineReducers({
  submit: submitReducer,
  createListing: createListReducer,
});

export default rootReducer;
