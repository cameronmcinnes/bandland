import { merge } from 'lodash';

import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_SEARCHED_USERS, RECEIVE_DISCOVERED_USERS } from '../actions/user_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';
import { DESTROY_COLLECTING } from '../actions/collecting_actions';
import { RECEIVE_FOLLOWING, DESTROY_FOLLOWING } from '../actions/following_actions';
import { removeCollectedId, removeFollowerId } from './selectors';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      let newState = merge(
        {},
        state,
        { [action.user.id]: action.user},
        action.users
      );
      return newState;
    case RECEIVE_FOLLOWING:
      newState = merge({}, state);
      const { followeeId, followerId } = action.following;
      newState[followeeId].followerIds.push(followerId);
      return newState;
    case DESTROY_FOLLOWING:
      const newFollowerIds = removeFollowerId(state, action.following);
      let newUser = merge({}, state[action.following.followeeId]);
      newUser.followerIds = newFollowerIds;
      return Object.assign({}, state, { [newUser.id]: newUser } );
    case RECEIVE_SEARCHED_USERS:
    case RECEIVE_DISCOVERED_USERS:
    case RECEIVE_ALBUM:
      return merge({}, state, action.users);
    case DESTROY_COLLECTING:
      const newCollectedAlbIds = removeCollectedId(state, action.collecting);
      newUser = merge({}, state[action.collecting.collectorId]);
      newUser.collectedAlbumIds = newCollectedAlbIds;
      return Object.assign({}, state, { [newUser.id]: newUser } );
    default:
      return state;
  }
};

export default usersReducer;
