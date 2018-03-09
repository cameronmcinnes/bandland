import { merge } from 'lodash';

import { RECEIVE_USER } from '../actions/user_actions';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return action.albums || {};
    default:
      return state;
  }
};

export default albumsReducer;
