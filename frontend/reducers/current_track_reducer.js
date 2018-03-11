import { CHANGE_CURRENT_TRACK } from '../actions/ui_actions';

const defaultState = {
  id: null
};

const currentTrackReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case CHANGE_CURRENT_TRACK:
      return action.track;
    default:
      return state;
  }
};

export default currentTrackReducer;
