import axios from 'axios';

export const GET_ALL_USER_ID_START = 'GET_ALL_USER_ID_START';
export const GET_ALL_USER_ID_SUCCESS = 'GET_ALL_USER_ID_SUCCESS';
export const GET_ALL_USER_ID_FAIL = 'GET_ALL_USER_ID_FAIL';

export const getAllUserId = () => dispatch => {
  dispatch({ type: GET_ALL_USER_ID_START });
  return axios
    .get('https://labstech2rent.herokuapp.com/api/users/')
    .then(res => {
      dispatch({ type: GET_ALL_USER_ID_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_USER_ID_FAIL, payload: err });
    });
};
