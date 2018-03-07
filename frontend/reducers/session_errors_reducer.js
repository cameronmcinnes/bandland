import { merge } from 'lodash';

import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_SESSION_ERRORS
} from '../actions/session_actions';
import { TOGGLE_MODAL } from '../actions/ui_actions';

const defaultState = {
  email: [],
  username: [],
  password: [],
};

const sessionErrorsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return merge({}, state, action.errors.responseJSON);
    // QUESTION
    // is it bad practice to modify errors slice of state with the modal action
    // because thats a ui action ???
    // case RECEIVE_CURRENT_USER:
    //   return defaultState;
    case CLEAR_SESSION_ERRORS:
    case TOGGLE_MODAL:
      return defaultState;
    default:
      return state;
  }
};

export default sessionErrorsReducer;
