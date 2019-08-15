import axios from 'axios';

export const GET_ITEMS_START = 'GET_ITEMS_START';

export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';

export const GET_ITEMS_FAIL = 'GET_ITEMS_FAIL';

export const getItems = () => dispatch => {
  dispatch({ type: GET_ITEMS_START });
  axios
    .get('https://labstech2rent.herokuapp.com/api/items')
    .then(res => {
      dispatch({ type: GET_ITEMS_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: GET_ITEMS_FAIL, payload: err });
    });
};
