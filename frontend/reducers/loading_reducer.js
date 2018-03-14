import { merge } from 'lodash';

import {
  START_LOADING_USER,
  RECEIVE_USER,
  START_UPDATING_USER
} from '../actions/user_actions';

import {
  START_UPLOADING_ALBUM,
  RECEIVE_ALBUM,
  RECEIVE_ALBUM_ERRORS
} from '../actions/album_actions';

const initialState = {
  showLoading: false,
  updateLoading: false,
  albumUploading: false
};

// could prob do upload and fetch album as one ??
const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_LOADING_USER:
      return merge({}, state, { showLoading: true });
    case START_UPDATING_USER:
      return merge({}, state, { updateLoading: true });
    case START_UPLOADING_ALBUM:
      return merge({}, state, { albumUploading: true });
    case RECEIVE_ALBUM:
    case RECEIVE_ALBUM_ERRORS:
      return merge({}, state, { albumUploading: false});
    case RECEIVE_USER:
      return merge({}, state, { showLoading: false, updateLoading: false });
    default:
      return state;
  }
};

export default loadingReducer;
