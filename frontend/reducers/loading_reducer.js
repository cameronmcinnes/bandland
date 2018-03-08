import { merge } from 'lodash';

import {
  START_LOADING_USER,
  RECEIVE_USER,
  START_UPDATING_USER
} from '../actions/user_actions';

const initialState = {
  showLoading: false,
  updateLoading: false
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_LOADING_USER:
      return merge({}, state, { showLoading: true });
    case START_UPDATING_USER:
      return merge({}, state, { updateLoading: true });
    case RECEIVE_USER:
      return merge({}, state, { showLoading: false, updateLoading: false });
    default:
      return state;
  }
};

export default loadingReducer;
