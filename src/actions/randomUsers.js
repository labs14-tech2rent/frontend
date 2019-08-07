import axios from 'axios';

export const RANDOM_USER = 'RANDOM_USER';
export const RANDOM_SUCCESS = 'RANDOM_USER';
export const RANDOM_FAIL = 'RANDOM_USER';

// takes in 'creds' or 'credentials -- username and pass --, and sends it to the endpoint

export const random = dispatch => {
  dispatch({ type: RANDOM_USER });
  return axios
    .get(
      'https://randomuser.me/api/?results=4&inc=name,picture,email,registered'
    )
    .then(res => {
      dispatch({ type: RANDOM_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      dispatch({ type: RANDOM_FAIL, payload: '' });
    });
};
