import {LOGOUT, RESET} from '../actions'

const initialState = {
    users: [],
    newUser: false,
    error: false,
    user: {},
    loggedIn: false


    // Array characters, Boolean fetching, null error.
  };

  export const rootReducer = (state=initialState, action)=> {
    switch (action.type) {
       
    
       
        case LOGOUT:
        return {
        ...initialState,
        
        }

        case RESET:
            return {
            ...state,
            newUser: false,
            error: false,
            user: {},
            loggedIn: false
            }
        
        
    default:
        return state;
  }
}

