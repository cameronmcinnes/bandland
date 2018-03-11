export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const RECEIVE_NEW_PROFILE_PICTURE = 'RECEIVE_NEW_PROFILE_PICTURE';
export const CHANGE_CURRENT_TRACK = 'CHANGE_CURRENT_TRACK';

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

export const changeCurrentTrack = (track) => ({
  type: CHANGE_CURRENT_TRACK,
  track
});
