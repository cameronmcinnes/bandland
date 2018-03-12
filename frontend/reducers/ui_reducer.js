import { combineReducers } from 'redux';

import modals from './modals_reducer';
import loading from './loading_reducer';
import menus from './menus_reducer';
import profile from './profile_reducer';
import currentTrack from './current_track_reducer';
import searchResults from './search_results_reducer';

export default combineReducers({
  modals,
  loading,
  menus,
  profile,
  currentTrack,
  searchResults
});
