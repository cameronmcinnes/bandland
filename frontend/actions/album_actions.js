import * as AlbumAPIUtil from '../util/album_api_util';

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_NEW_ALBUM = 'RECEIVE_NEW_ALBUM';
export const START_LOADING_ALBUM = 'START_LOADING_ALBUM';
export const START_UPLOADING_ALBUM = 'START_UPLOADING_ALBUM';
export const RECEIVE_SEARCHED_ALBUMS = 'RECEIVE_SEARCHED_ALBUMS';
export const RECEIVE_ALBUM_ERRORS = 'RECEIVE_ALBUM_ERRORS';
export const CLEAR_ALBUM_ERRORS = 'CLEAR_ALBUM_ERRORS';

export const receiveAlbum = ({albums, users, tracks}) => ({
  type: RECEIVE_ALBUM,
  albums,
  users,
  tracks
});

export const receiveNewAlbum = (album) => ({
  type: RECEIVE_NEW_ALBUM,
  album
});

export const fetchAlbum = id => dispatch => {
  dispatch(startUploadingAlbum);
  return AlbumAPIUtil.fetchAlbum(id).then(
    (payload) => dispatch(receiveAlbum(payload))
  );
};

export const startUploadingAlbum = () => ({
  type: START_UPLOADING_ALBUM
});

export const startLoadingAlbum = () => ({
  type: START_LOADING_ALBUM
});

export const searchAlbums = (query) => dispatch => (
  AlbumAPIUtil.searchAlbums(query).then(
    (albums) => dispatch(receiveSearchedAlbums(albums))
  )
);

export const receiveSearchedAlbums = (albums) => ({
  type: RECEIVE_SEARCHED_ALBUMS,
  albums
});

export const createAlbum = (data, userId) => (dispatch) => {
  return AlbumAPIUtil.createAlbum(data, userId).then(
    (album) => dispatch(receiveNewAlbum(album)),
    (errors) => dispatch(receiveAlbumErrors(errors))
  )
};

export const receiveAlbumErrors = errors => ({
  type: RECEIVE_ALBUM_ERRORS,
  errors
})

export const clearAlbumErrors = (field) => ({
  type: CLEAR_ALBUM_ERRORS,
  field
})
