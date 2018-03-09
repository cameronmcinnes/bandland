import { combineReducers } from 'redux';

import users from './users_reducer';
import collectedAlbums from './albums_reducer';

const entitiesReducer = combineReducers({
  users,
  collectedAlbums
});

export default entitiesReducer;
