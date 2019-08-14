import axios from 'axios';
import apiKey from './config.js';

// export const itemQuery = localStorage.getItem('itemQuery');
export const GET_PHOTOS_START = 'GET_PHOTOS_START';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL';

export const getPhotos = item => dispatch => {
  dispatch({ type: GET_PHOTOS_START });
  // console.log(itemQuery);
  return axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${
        localStorage.getItem('itemQuery') !== null
          ? localStorage.getItem('itemQuery')
          : item
      }&per_page=60&format=json&nojsoncallback=1`
    )
    .then(res => {
      dispatch({ type: GET_PHOTOS_SUCCESS, payload: res.data.photos.photo });
      localStorage.removeItem('itemQuery');
    })
    .catch(err => {
      dispatch({ type: GET_PHOTOS_FAIL, payload: err });
    });
};
