import { merge } from 'lodash';

import { RECEIVE_SEARCHED_USERS } from '../actions/user_actions';

const searchResultsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCHED_USERS:
      return Object.keys(action.users);
    default:
      return state;
  }
};

export default searchResultsReducer;
