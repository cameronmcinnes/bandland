import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const defaultSession = {
  currentUser: null
}

const sessionReducer = (state = defaultSession, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, state, { currentUser });
    default:
      return state;
  }
}

export default sessionReducer;
