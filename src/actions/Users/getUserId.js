import axios from 'axios';

export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';

export const getUserId = user => dispatch => {
  dispatch({ type: GET_USER_START });
  return axios
    .post('https://labstech2rent.herokuapp.com/api/users/findUser', user)
    .then(res => {
      dispatch({ type: GET_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_USER_FAIL, payload: err });
    });
};
