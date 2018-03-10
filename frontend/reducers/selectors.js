export const selectOpenModal = (state) => {
  const keys = Object.keys(state.ui.modals);
  for (let i = 0; i < keys.length; i++) {
    if (state.ui.modals[keys[i]]) return keys[i];
  }
};

export const selectTitle = (modalName) => {
  if (modalName === 'login') {
    return 'Log in';
  } else if (modalName === 'signup') {
    return 'Sign up for a Bandland account';
  } else if (modalName === 'profileImage') {
    return 'Add a Profile Image';
  } else {
    return 'Add a Banner Image';
  }
};

export const selectCollectedAlbums = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  return Object.values(state.entities.albums).filter( album => (
    state.entities.users[userId].collectedAlbumIds.includes(album.id)
  ));
};

export const selectOwnAlbums = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  return Object.values(state.entities.albums).filter( album => (
    state.entities.users[userId].ownAlbumIds.includes(album.id)
  ));
};

export const selectAlbumCollectors = (state, match) => {
    const albumId = match.params.albumId;
    return Object.values(state.entities.users).filter( user => (
    state.entities.albums[albumId].collectorIds.includes(user.id)
  ));
};
