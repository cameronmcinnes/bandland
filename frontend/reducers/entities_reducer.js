import { combineReducers } from 'redux';

import users from './users_reducer';
import albums from './albums_reducer';

const entitiesReducer = combineReducers({
  users,
  albums
});

export default entitiesReducer;
