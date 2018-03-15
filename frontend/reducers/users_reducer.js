import { merge } from 'lodash';

import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_SEARCHED_USERS } from '../actions/user_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';
import { DESTROY_COLLECTING } from '../actions/collecting_actions';
import { removeCollectedId } from './selectors';

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user});
    case RECEIVE_SEARCHED_USERS:
    case RECEIVE_ALBUM:
      return merge({}, state, action.users);
    case DESTROY_COLLECTING:
      const newCollectedAlbIds = removeCollectedId(state, action.collecting);
      const newUser = merge({}, state[action.collecting.collectorId]);
      newUser.collectedAlbumIds = newCollectedAlbIds;
      return Object.assign({}, state, { [newUser.id]: newUser } );
    default:
      return state;
  }
};

export default sessionReducer;
