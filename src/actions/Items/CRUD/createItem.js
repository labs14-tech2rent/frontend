import axios from 'axios';

export const CREATE_LISTING_START = 'CREATE_LISTING_START';
export const CREATE_LISTING_SUCCESS = 'CREATE_LISTING_SUCCESS';
export const CREATE_LISTING_FAILED = 'CREATE_LISTING_FAILED';

export const createItem = (id, listing) => dispatch => {
  dispatch({ type: CREATE_LISTING_START });
  return axios
    .post(`https://labstech2rent.herokuapp.com/api/users/${id}/items`, listing)
    .then(res => {
      dispatch({ type: CREATE_LISTING_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: CREATE_LISTING_FAILED, payload: err });
    });
};
