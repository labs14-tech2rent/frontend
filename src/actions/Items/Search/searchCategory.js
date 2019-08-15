import axios from 'axios';

export const SEARCH_CAT_START = 'SEARCH_CAT_START';

export const SEARCH_CAT_SUCCESS = 'SEARCH_CAT_SUCCESS';

export const SEARCH_CAT_FAIL = 'SEARCH_CAT_FAIL';

export const searchCategory = category => dispatch => {
  dispatch({ type: SEARCH_CAT_START });
  axios
    .post(
      'https://labstech2rent.herokuapp.com/api/items/searchCategory',
      category
    )
    .then(res => {
      dispatch({ type: SEARCH_CAT_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: SEARCH_CAT_FAIL, payload: err });
    });
};
