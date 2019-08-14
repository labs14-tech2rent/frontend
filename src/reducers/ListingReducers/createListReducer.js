import {
  CREATE_LISTING_SUCCESS,
  CREATE_LISTING_START,
  CREATE_LISTING_FAILED,
} from '../../actions/Listings/createListing';

const initalState = {
  creatingListing: false,
  res: [],
  error: '',
};

export const createListReducer = (state = initalState, action) => {
  switch (action.type) {
    case CREATE_LISTING_START:
      return {
        ...state,
        creatingListing: true,
      };
    case CREATE_LISTING_SUCCESS:
      return {
        ...state,
        res: action.payload,
        creatingListing: false,
      };

    case CREATE_LISTING_FAILED:
      return {
        ...state,
        error: action.payload,
        creatingListing: false,
      };

    default:
      return state;
  }
};
