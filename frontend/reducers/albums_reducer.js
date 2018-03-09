import { merge } from 'lodash';

import { RECEIVE_USER } from '../actions/user_actions';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, state, action.collectedAlbums);
    default:
      return state;
  }
};

export default albumsReducer;
