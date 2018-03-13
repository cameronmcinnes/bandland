export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const RECEIVE_NEW_PROFILE_PICTURE = 'RECEIVE_NEW_PROFILE_PICTURE';
// export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';
export const CHANGE_CURRENT_TRACK = 'CHANGE_CURRENT_TRACK';
export const PLAY_PAUSE_CURRENT_TRACK = 'PLAY_PAUSE_CURRENT_TRACK';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const toggleModal = (modalName) => ({
  type: TOGGLE_MODAL,
  modalName
});

export const toggleMenu = (menu) => {
  return {
    type: TOGGLE_MENU,
    menu
  };
};

export const receiveNewProfilePicture = (picType, pic, picUrl) => {
  return {
    type: RECEIVE_NEW_PROFILE_PICTURE,
    picType,
    pic,
    picUrl
  };
};

// export const receiveCurrentTrack = (track) => ({
//   type: RECEIVE_CURRENT_TRACK,
//   track
// });

export const changeCurrentTrack = (track, paused) => ({
  type: CHANGE_CURRENT_TRACK,
  track,
  paused
});

export const playPauseCurrentTrack = () => ({
  type: PLAY_PAUSE_CURRENT_TRACK
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH
});
