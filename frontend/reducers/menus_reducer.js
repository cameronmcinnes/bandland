import { TOGGLE_MENU } from '../actions/ui_actions';
import { merge } from 'lodash';

const defaultState = {
  gearDropdown: false,
  userEdit: false,
  searchDropdown: false,
};

const menusReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case TOGGLE_MENU:
      const newState = { [action.menu]: !state[action.menu] };
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default menusReducer;
