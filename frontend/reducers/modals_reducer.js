import { TOGGLE_MODAL } from '../actions/ui_actions';
import { merge } from 'lodash';

const defaultState = {
  signup: false,
  login: false,
  profileImage: false
};

const modalsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case TOGGLE_MODAL:
      const newState = { [action.modalName]: !state[action.modalName] };
      return merge({}, defaultState, newState);
    default:
      return state;
  }
};

export default modalsReducer;
