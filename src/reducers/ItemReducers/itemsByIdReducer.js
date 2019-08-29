import {
  GET_ITEM_BY_ID_START,
  GET_ITEM_BY_ID_SUCCESS,
  GET_ITEM_BY_ID_FAIL,
} from '../../actions/Items/CRUD/getItemById';

const initalState = {
  item: [],
  error: '',
};

export const itemsByIdReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_ITEM_BY_ID_START:
      return {
        ...state,
      };
    case GET_ITEM_BY_ID_SUCCESS:
      return {
        ...state,
        item: action.payload,
      };

    case GET_ITEM_BY_ID_FAIL:
      return {
        ...state,
        error: action.payload,
        error: action.payload,
      };

    default:
      return state;
  }
};
