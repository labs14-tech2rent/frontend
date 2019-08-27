import { combineReducers } from 'redux';
import { submitReducer } from './submitReducer';
import { createItemReducer } from './ItemReducers/createItemReducer';
import { getUserIdReducer } from './UsersReducers/getUserIdReducer';
import { getItemsReducer } from './getItemsReducer';
import { getPhotosReducer } from './getPhotosReducer';
import { registeredReducer } from './registeredReducer';
import { itemsByIdReducer } from './ItemReducers/itemsByIdReducer';
import Auth from '../Auth';

const auth = new Auth();
const rootReducer = combineReducers({
  submit: submitReducer,
  createItem: createItemReducer,
  getUser: getUserIdReducer,
  getItems: getItemsReducer,
  getPhotos: getPhotosReducer,
  registered: registeredReducer,
  item: itemsByIdReducer,
  auth,
});

export default rootReducer;
