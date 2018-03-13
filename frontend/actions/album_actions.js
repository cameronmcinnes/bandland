import * as AlbumAPIUtil from '../util/album_api_util';

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const START_LOADING_ALBUM = 'START_LOADING_ALBUM';
export const RECEIVE_SEARCHED_ALBUMS = 'RECEIVE_SEARCHED_ALBUMS';

export const receiveAlbum = ({albums, users, tracks}) => ({
  type: RECEIVE_ALBUM,
  albums,
  users,
  tracks
});

export const fetchAlbum = id => dispatch => {
  dispatch(startLoadingAlbum);
  return AlbumAPIUtil.fetchAlbum(id).then(
    (payload) => dispatch(receiveAlbum(payload))
  );
};

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

export const createAlbum = (data, userId) => (
  AlbumAPIUtil.createAlbum(data, userId).then(
    (payload) =>  dispatch(receiveAlbum(payload))
  )
)
