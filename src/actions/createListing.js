import axios from 'axios';

export const CREATE_LISTING_START = 'CREATE_LISTING_START';
export const CREATE_LISTING_SUCCESS = 'CREATE_LISTING_SUCCESS';
export const CREATE_LISTING_FAILED = 'CREATE_LISTING_FAILED';

export createListing = listing => dispatch => {
  dispatch({type: CREATE_LISTING_START})
  return axios.post('')
}
