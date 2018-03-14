import { merge } from 'lodash';

import {
  RECEIVE_ALBUM_ERRORS
  // CLEAR_ALBUM_ERRORS
} from '../actions/album_actions';

const defaultState = {
  title: [],
  price: [],
  cover_img: []
};

const albumErrorsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALBUM_ERRORS:
      return merge({}, state, action.errors.responseJSON);
    // QUESTION
    // is it bad practice to modify errors slice of state with the modal action
    // because thats a ui action ???
    // case RECEIVE_CURRENT_USER:
    //   return defaultState;
    case CLEAR_ALBUM_ERRORS:
      return defaultState;
    default:
      return state;
  }
};

export default albumErrorsReducer;
