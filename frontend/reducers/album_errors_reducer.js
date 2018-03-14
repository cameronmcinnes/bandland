// dont use lodash merge because an empty arr will disolve when merged with an arr
import {
  RECEIVE_ALBUM_ERRORS,
  CLEAR_ALBUM_ERRORS
} from '../actions/album_actions';
import { selectAlbumErrors } from './selectors';

const defaultState = {
  title: [],
  price: [],
  cover_img: [],
  genre: [],
  description: []
};

const albumErrorsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALBUM_ERRORS:
      return Object.assign({}, state, selectAlbumErrors(action.errors));
    case CLEAR_ALBUM_ERRORS:
      return Object.assign({}, state, { [action.field]: [] });
    default:
      return state;
  }
};

export default albumErrorsReducer;
