import axios from 'axios';

export const GET_ITEM_BY_ID_START = 'GET_ITEM_BY_ID_START';

export const GET_ITEM_BY_ID_SUCCESS = 'GET_ITEM_BY_ID_SUCCESS';

export const GET_ITEM_BY_ID_FAIL = 'GET_ITEM_BY_ID_FAIL';

export const getItemById = id => dispatch => {
  dispatch({ type: GET_ITEM_BY_ID_START });
  axios
    .get(`https://labstech2rentstaging.herokuapp.com/api/items/${id}`)
    .then(res => {
      dispatch({ type: GET_ITEM_BY_ID_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: GET_ITEM_BY_ID_FAIL, payload: err });
    });
};
