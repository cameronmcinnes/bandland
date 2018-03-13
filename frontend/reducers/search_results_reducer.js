import { merge } from 'lodash';

import { RECEIVE_SEARCHED_USERS } from '../actions/user_actions';
import { RECEIVE_SEARCHED_ALBUMS } from '../actions/album_actions';
import { CLEAR_SEARCH } from '../actions/ui_actions';

const defaultState = {
  userIds: [],
  albumIds: []
};

const searchResultsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCHED_USERS:
      return merge({}, state, { userIds: Object.keys(action.users) });
    case RECEIVE_SEARCHED_ALBUMS:
      return merge({}, state, { albumIds: Object.keys(action.albums) });
    case CLEAR_SEARCH:
      return defaultState;
    default:
      return state;
  }
};

export default searchResultsReducer;
