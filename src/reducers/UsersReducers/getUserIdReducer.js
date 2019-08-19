import { GET_USER_START, GET_USER_SUCCESS, GET_USER_FAIL } from '../../actions';

const initialState = {
  user: [],
  gettingUser: false,
  err: null,
};

export const getUserIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_START:
      return {
        ...state,
        gettingUser: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        gettingUser: false,
      };

    case GET_USER_FAIL:
      return {
        ...state,
        err: action.payload,
        gettingUser: false,
      };
    default:
      return state;
  }
};
