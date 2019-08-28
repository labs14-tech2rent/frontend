import axios from 'axios';

export const GET_USER_REVIEWS_START = 'GET_USER_REVIEWS_START';
export const GET_USER_REVIEWS_SUCCESS = 'GET_USER_REVIEWS_SUCCESS';
export const GET_USER_REVIEWS_FAIL = 'GET_USER_REVIEWS_FAIL';

export const getUserReviews = userId => dispatch => {
  dispatch({ type: GET_USER_REVIEWS_START });
  return axios
    .get(
      `https://labstech2rentstaging.herokuapp.com/api/users/${userId}/reviews`
    )
    .then(res => {
      dispatch({ type: GET_USER_REVIEWS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_USER_REVIEWS_FAIL, payload: err });
    });
};
