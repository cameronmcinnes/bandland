import { merge } from 'lodash';

import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return action.albums || {};
    case RECEIVE_ALBUM:
      return merge({}, state, { [action.album.id]: action.album});
    default:
      return state;
  }
};

export default albumsReducer;
