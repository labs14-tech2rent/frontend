import { combineReducers } from 'redux';
import { submitReducer } from './UsersReducers/getEveryUserIdReducer';
import { createItemReducer } from './ItemReducers/createItemReducer';
import { getUserIdReducer } from './UsersReducers/getUserIdReducer';
import Auth from '../Auth';

const auth = new Auth();
const rootReducer = combineReducers({
  submit: submitReducer,
  createItem: createItemReducer,
  getUser: getUserIdReducer,
  auth,
});

export default rootReducer;
