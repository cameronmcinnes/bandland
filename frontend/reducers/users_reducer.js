import { merge } from 'lodash';

import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_SEARCHED_USERS } from '../actions/user_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user});
    case RECEIVE_SEARCHED_USERS:
    case RECEIVE_ALBUM:
      return merge({}, state, action.users);
    default:
      return state;
  }
};

export default sessionReducer;
