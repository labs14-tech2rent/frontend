import { GET_ITEMS_START, GET_ITEMS_SUCCESS, GET_ITEMS_FAIL } from '../actions';

const initialState = {
  items: [],
  gettingItem: false,
  err: null,
};

export const getItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_START:
      return {
        ...state,
        gettingUser: true,
      };
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        gettingUser: false,
      };

    case GET_ITEMS_FAIL:
      return {
        ...state,
        err: action.payload,
        gettingItems: false,
      };
    default:
      return state;
  }
};
