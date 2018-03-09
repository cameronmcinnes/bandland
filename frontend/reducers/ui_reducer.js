import { combineReducers } from 'redux';

import modals from './modals_reducer';
import loading from './loading_reducer';
import menus from './menus_reducer';
import profile from './profile_reducer';

export default combineReducers({
  modals,
  loading,
  menus,
  profile
});
