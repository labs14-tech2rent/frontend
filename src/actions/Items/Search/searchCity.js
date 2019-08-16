import axios from 'axios';

export const SEARCH_CITY_START = 'SEARCH_CITY_START';

export const SEARCH_CITY_SUCCESS = 'SEARCH_CITY_SUCCESS';

export const SEARCH_CITY_FAIL = 'SEARCH_CITY_FAIL';

export const searchCity = city => dispatch => {
  dispatch({ type: SEARCH_CITY_START });
  axios
    .post('https://labstech2rent.herokuapp.com/api/items/searchCity', city)
    .then(res => {
      dispatch({ type: SEARCH_CITY_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: SEARCH_CITY_FAIL, payload: err });
    });
};
