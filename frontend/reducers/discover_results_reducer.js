import { merge } from 'lodash';

import { RECEIVE_DISCOVERED_USERS,
  RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_DISCOVERED_ALBUMS,
  RECEIVE_ALBUMS,
  RECEIVE_ALBUM } from '../actions/album_actions';

const defaultState = {
  albumIds: [],
  artistIds: [],
  recentAlbums: []
};

const discoverResultsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALBUMS:
      if (action.recentAlbums.length > 0) {
        return Object.assign({}, state, { recentAlbums: action.recentAlbums });
      } else {
        return state;
      }
    case RECEIVE_DISCOVERED_ALBUMS:
      return Object.assign({}, state, { albumIds: Object.keys(action.albums) });
    case RECEIVE_DISCOVERED_USERS:
      return Object.assign({}, state, { artistIds: Object.keys(action.users) });
    case RECEIVE_ALBUM:
    case RECEIVE_USER:
      return defaultState;
    default:
      return state;
  }
};

export default discoverResultsReducer;
