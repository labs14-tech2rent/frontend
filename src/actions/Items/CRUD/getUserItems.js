import axios from 'axios';

export const GET_USER_ITEMS_START = 'GET_USER_ITEMS_START';
export const GET_USER_ITEMS_SUCCESS = 'GET_USER_ITEMS_SUCCESS';
export const GET_USER_ITEMS_FAIL = 'GET_USER_ITEMS_FAIL';

// THIS IS ALSO USED TO GET USER BY ID

export const getUserItems = userId => dispatch => {
  dispatch({ type: GET_USER_ITEMS_START });

  axios
    .get(`https://labstech2rentstaging.herokuapp.com/api/users/${userId}`)
    .then(res => {
      dispatch({ type: GET_USER_ITEMS_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: GET_USER_ITEMS_FAIL, payload: err });
    });
};
