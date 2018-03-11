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
  if (!state.entities.users[userId]) return [];
  return Object.values(state.entities.albums).filter( album => (
    state.entities.users[userId].collectedAlbumIds.includes(album.id)
  ));
};

export const selectOwnAlbums = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  if (!state.entities.users[userId]) return [];
  return Object.values(state.entities.albums).filter( album => (
    state.entities.users[userId].ownAlbumIds.includes(album.id)
  ));
};

export const selectAlbumCollectors = (state, match) => {
  const albumId = match.params.albumId;
  const album = state.entities.albums[albumId]
  if (!(album && album.collectorIds)) return [];
  return Object.values(state.entities.users).filter( user => (
    album.collectorIds.includes(user.id)
  ));
};

export const selectAlbumTracks = (state, match) => {
  const albumId = match.params.albumId;
  const album = state.entities.albums[albumId];
  if (!(album && album.trackIds)) return [];
  return Object.values(state.entities.tracks).filter( track => (
    state.entities.albums[albumId].trackIds.includes(track.id)
  ));
};

export const selectArtistDiscog = (state, match) => {
  const albumId = match.params.albumId;

  const album = state.entities.albums[albumId];
  if (!album) {
    return [];
  }
  const artist = state.entities.users[album.artistId]

  if (!(artist && artist.ownAlbumIds)) return [];
  
  return Object.values(state.entities.albums).filter( album => (
    artist.ownAlbumIds.includes(album.id)
  ));
}
