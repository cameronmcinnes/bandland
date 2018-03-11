import { merge } from 'lodash';

import { RECEIVE_ALBUM } from '../actions/album_actions';

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALBUM:
      return action.tracks;
    default:
      return state;
  }
};

export default tracksReducer;
