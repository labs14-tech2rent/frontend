import axios from 'axios';

export const EDIT_USER_START = 'EDIT_USER_START';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const EDIT_USER_FAIL = 'EDIT_USER_FAIL;';

export const editUser = (id, details) => dispatch => {
  dispatch({ type: EDIT_USER_START });
  return axios
    .put(`https://labstech2rent.herokuapp.com/api/users/${id}`, details)
    .then(res => {
      dispatch({ type: EDIT_USER_SUCCESS, payload: res }); // /
    })
    .catch(err => {
      dispatch({ type: EDIT_USER_FAIL, payload: err });
    });
};
