import { combineReducers } from 'redux';

import session from './session_errors_reducer';

const errorsReducer = combineReducers({
  session
});

export default errorsReducer;
