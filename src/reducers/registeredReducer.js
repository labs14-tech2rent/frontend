import { REGISTERED } from '../actions';

const initialState = {
  registered: false,
};

export const registeredReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTERED:
      return {
        ...state,
        registered: false,
      };
    default:
      return state;
  }
};
