import axios from 'axios';

export const EDIT_ITEM_START = 'EDIT_ITEM_START';
export const EDIT_ITEM_SUCCESS = 'EDIT_ITEM_SUCCESS';
export const EDIT_ITEM_FAIL = 'EDIT_ITEM_FAIL';

export const editItem = (id, item) => dispatch => {
  dispatch({ type: EDIT_ITEM_START });
  axios
    .put(`https://labstech2rentstaging.herokuapp.com/api/items/${id}`, item)
    .then(res => {
      dispatch({ type: EDIT_ITEM_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: EDIT_ITEM_FAIL, payload: err });
    });
};
