import axios from 'axios';

export const DELETE_ITEM_START = 'DELETE_ITEM_START';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAIL = 'DELETE_ITEM_FAIL';

export const deleteItem = (id, item) => dispatch => {
  dispatch({ type: DELETE_ITEM_START });
  axios
    .delete(`https://labstech2rentstaging.herokuapp.com/api/items/${id}`, item)
    .then(res => {
      dispatch({ type: DELETE_ITEM_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: DELETE_ITEM_FAIL, payload: err });
    });
};
