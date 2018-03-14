import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import albums from './album_errors_reducer';

const errorsReducer = combineReducers({
  session,
  albums
});

export default errorsReducer;
