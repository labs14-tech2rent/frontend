import axios from 'axios';

export const SEARCH_CONDITION_START = 'SEARCH_CONDITION_START';

export const SEARCH_CONDITION_SUCCESS = 'SEARCH_CONDITION_SUCCESS';

export const SEARCH_CONDITION_FAIL = 'SEARCH_CONDITION_FAIL';

export const searchCondition = condition => dispatch => {
  dispatch({ type: SEARCH_CONDITION_START });
  axios
    .post(
      'https://labstech2rent.herokuapp.com/api/items/searchCondition',
      condition
    )
    .then(res => {
      dispatch({ type: SEARCH_CONDITION_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: SEARCH_CONDITION_FAIL, payload: err });
    });
};
