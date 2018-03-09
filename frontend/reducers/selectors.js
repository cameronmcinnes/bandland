export const selectOpenModal = (state) => {
  const keys = Object.keys(state.ui.modals);
  for (let i = 0; i < keys.length; i++) {
    if (state.ui.modals[keys[i]]) return keys[i];
  }
};

export const selectTitle = (modalName) => {
  if (modalName === 'login') {
    return 'Log in';
  } else {
    return 'Sign up for a Bandland account';
  }
};

export const selectCollectedAlbums = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  return Object.values(state.entities.albums).filter( album => (
    state.entities.users[userId].collectedAlbumIds.includes(album.id)
  ));
};
