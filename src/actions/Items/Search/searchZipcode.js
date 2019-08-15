import axios from 'axios';

export const SEARCH_ZIPCODE_START = 'SEARCH_ZIPCODE_START';

export const SEARCH_ZIPCODE_SUCCESS = 'SEARCH_ZIPCODE_SUCCESS';

export const SEARCH_ZIPCODE_FAIL = 'SEARCH_ZIPCODE_FAIL';

export const searchZipcode = zipcode => dispatch => {
  dispatch({ type: SEARCH_ZIPCODE_START });
  axios
    .post(
      'https://labstech2rent.herokuapp.com/api/items/searchZipCode',
      zipcode
    )
    .then(res => {
      dispatch({ type: SEARCH_ZIPCODE_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: SEARCH_ZIPCODE_FAIL, payload: err });
    });
};
