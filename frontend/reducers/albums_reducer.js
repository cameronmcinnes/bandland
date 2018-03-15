import { merge } from 'lodash';

import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_ALBUM, RECEIVE_SEARCHED_ALBUMS } from '../actions/album_actions';
import { RECEIVE_COLLECTING, DESTROY_COLLECTING } from '../actions/collecting_actions';
import { removeCollectorId } from './selectors';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COLLECTING:
      const newState = merge({}, state);
      const { collectedId, collectorId } = action.collecting;
      newState[collectedId].collectorIds.push(collectorId);
      return newState;
    case DESTROY_COLLECTING:
      // BUG possobile bug when removeCollectorId returns null?
      const newCollIds = removeCollectorId(state, action.collecting);
      const newAlb = merge({}, state[action.collecting.collectedId]);
      newAlb.collectorIds = newCollIds;
      return Object.assign({}, state, { [newAlb.id]: newAlb } );
    case RECEIVE_USER:
      return action.albums || {};
    case RECEIVE_ALBUM:
      return action.albums;
    case RECEIVE_SEARCHED_ALBUMS:
      return merge({}, state, action.albums);
    default:
      return state;
  }
};

export default albumsReducer;
