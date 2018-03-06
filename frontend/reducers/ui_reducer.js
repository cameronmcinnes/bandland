import { TOGGLE_MODAL } from '../actions/ui_actions';
import { merge } from 'lodash';

const uiReducer = (state = { modalOpen: false }, action) => {
  Object.freeze(state);
  switch(action.type){
    case TOGGLE_MODAL:
      return merge({}, state, { modalOpen: !state.modalOpen });
    default:
      return state;
  }
};

export default uiReducer;
