import { merge } from 'lodash';

import {
  START_LOADING_USER,
  RECEIVE_USER
} from '../actions/user_actions';

const initialState = {
  showLoading: false
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_LOADING_USER:
      return merge({}, state, { showLoading: true });
    case RECEIVE_USER:
      return merge({}, state, { showLoading: false });
    default:
      return state;
  }
};

export default loadingReducer;

// Object.freeze(state);
// switch (action.type) {
//   case RECEIVE_ALL_POKEMON:
//     return Object.assign({}, state, { indexLoading: false });
//   case RECEIVE_NEW_POKEMON:
//   case RECEIVE_SINGLE_POKEMON:
//   case RECEIVE_POKEMON_ERRORS:
//     return Object.assign({}, state, { detailLoading: false });
//   case START_LOADING_ALL_POKEMON:
//     return Object.assign({}, state, { indexLoading: true });
//   case CREATE_POKEMON:
//   case START_LOADING_SINGLE_POKEMON:
//     return Object.assign({}, state, { detailLoading: true });
//   default:
//     return state;
// }
