import {
  GET_USER_ITEMS_START,
  GET_USER_ITEMS_SUCCESS,
  GET_USER_ITEMS_FAIL,
} from '../../actions/Items/CRUD/getUserItems';

const initalState = {
  items: [],
  error: '',
};

export const getUserItemsReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_USER_ITEMS_START:
      return {
        ...state,
      };
    case GET_USER_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };

    case GET_USER_ITEMS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
