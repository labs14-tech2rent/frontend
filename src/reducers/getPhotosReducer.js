import { GET_PHOTOS_START, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAIL } from '../actions';

const initialState = {
  photos: [],
  gettingPhotos: false,
  err: null,
};

export const getPhotosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS_START:
      return {
        ...state,
        gettingPhotos: true,
      };
    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.payload,
        gettingPhotos: false,
      };

    case GET_PHOTOS_FAIL:
      return {
        ...state,
        err: action.payload,
        gettingPhotos: false,
      };
    default:
      return state;
  }
};
