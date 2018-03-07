import { merge } from 'lodash';

import { RECEIVE_USER } from '../actions/user_actions';

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      // should i shape the user to have id pointing to info in jbuilder
      return merge({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default sessionReducer;
