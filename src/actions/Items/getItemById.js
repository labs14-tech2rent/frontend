import axios from 'axios';

export const GET_ITEM_START = 'GET_ITEM_START';

export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';

export const GET_ITEM_FAIL = 'GET_ITEM_FAIL';

export const getItemById = id => dispatch => {
  dispatch({ type: GET_ITEM_START });
  axios
    .get(`https://labstech2rentstaging.herokuapp.com/api/items/${id}`)
    .then(res => {
      dispatch({ type: GET_ITEM_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: GET_ITEM_FAIL, payload: err });
    });
};
