import axios from 'axios';

export const ADD_USER_START = 'ADD_USER_START';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAIL = 'ADD_USER_FAIL;';

// takes in 'creds' or 'credentials -- username and pass --, and sends it to the endpoint
export const registerUser = creds => dispatch => {
  dispatch({ type: ADD_USER_START });
  return axios
    .post('https://labstech2rent.herokuapp.com/api/auth/register', creds)
    .then(res => {
      dispatch({ type: ADD_USER_SUCCESS, payload: res }); // /
    })
    .catch(err => {
      dispatch({ type: ADD_USER_FAIL, payload: '' });
    });
};
