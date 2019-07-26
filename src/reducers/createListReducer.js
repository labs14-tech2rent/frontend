import {
  CREATE_LISTING_SUCCESS,
  CREATE_LISTING_START,
  CREATE_LISTING_FAILED,
} from '../actions/createListing';

const initalState = {
  creatingListing: false,
  listing: [],
  error: '',
};

export const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case CREATE_LISTING_START:
      return {
        ...state,
        creatingListing: true,
      };
    case CREATE_LISTING_SUCCESS:
      return {
        ...state,
        listing: action.payload,
      };

    case CREATE_LISTING_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
