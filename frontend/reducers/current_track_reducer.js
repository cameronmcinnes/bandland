import { merge } from 'lodash';

import { RECEIVE_ALBUM } from '../actions/album_actions';
import {
  RECEIVE_CURRENT_TRACK,
  CHANGE_CURRENT_TRACK,
  PLAY_PAUSE_CURRENT_TRACK
} from '../actions/ui_actions';

const defaultState = {
  id: null,
  isPlaying: false
};

const currentTrackReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALBUM:
    // to account for albums w no tracks
      if (!action.tracks) return defaultState;
      const firstTrack = Object.values(action.tracks)[0];
      return merge({}, firstTrack, { isPlaying: false });
    case CHANGE_CURRENT_TRACK:
      if (action.paused) return merge({}, defaultState, action.track);
      return merge({}, action.track, { isPlaying: true });
    case PLAY_PAUSE_CURRENT_TRACK:
      return merge({}, state, { isPlaying: !state.isPlaying });
    default:
      return state;
  }
};

export default currentTrackReducer;
