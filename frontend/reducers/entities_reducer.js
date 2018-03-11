import { combineReducers } from 'redux';

import users from './users_reducer';
import albums from './albums_reducer';
import tracks from './tracks_reducer';

const entitiesReducer = combineReducers({
  users,
  albums,
  tracks
});

export default entitiesReducer;
