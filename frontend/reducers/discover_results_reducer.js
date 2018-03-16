import { merge } from 'lodash';

// import { RECEIVE_SEARCHED_USERS } from '../actions/user_actions';
import { RECEIVE_DISCOVERED_ALBUMS } from '../actions/album_actions';

const defaultState = {
  albumIds: [],
  artistIds: []
};

const discoverResultsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DISCOVERED_ALBUMS:
      return Object.assign({}, state, { albumIds: Object.keys(action.albums) });
    case RECEIVE_DISCOVERED_ALBUMS:
      return Object.assign({}, state, { artistIds: Object.keys(action.users) });
    default:
      return state;
  }
};

export default discoverResultsReducer;
