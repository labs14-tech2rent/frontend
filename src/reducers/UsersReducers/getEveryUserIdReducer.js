import { SUBMIT_START, SUBMIT_FAIL, SUBMIT_SUCCESS } from '../../actions';
import Auth from '../../Auth';

const auth = new Auth();

const initialState = {
  isLoading: false,
  submitFail: false,
  error: false,
  auth,
  users: [],
};

export const submitReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_START:
      return {
        ...state,
        isLoading: true,
        submitFail: false,
        auth,
      };

    case SUBMIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        users: action.payload,
      };
    case SUBMIT_FAIL:
      return {
        ...state,
        isLoading: false,
        submitFail: true,
        error: true,
      };
    default:
      return state;
  }
};
