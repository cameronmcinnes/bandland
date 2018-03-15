import { merge } from 'lodash';

import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';

const tagsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, state, action.tags);
    case RECEIVE_ALBUM:
      return merge({}, state, action.tags);
    default:
      return state;
  }
};

export default tagsReducer;
