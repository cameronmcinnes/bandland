import { merge } from 'lodash';

import { RECEIVE_SEARCHED_USERS } from '../actions/user_actions';
import { CLEAR_SEARCH } from '../actions/ui_actions';

const searchResultsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCHED_USERS:
      return Object.keys(action.users);
    case CLEAR_SEARCH:
      return [];
    default:
      return state;
  }
};

export default searchResultsReducer;
