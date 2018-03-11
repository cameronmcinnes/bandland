import * as AlbumAPIUtil from '../util/album_api_util';

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const START_LOADING_ALBUM = 'START_LOADING_ALBUM';

export const receiveAlbum = ({albums, users, tracks}) => ({
  type: RECEIVE_ALBUM,
  albums,
  users,
  tracks
});

export const fetchAlbum = id => dispatch => {
  dispatch(startLoadingAlbum);
  return AlbumAPIUtil.fetchAlbum(id).then(
    (album) => dispatch(receiveAlbum(album))
  );
};

export const startLoadingAlbum = () => ({
  type: START_LOADING_ALBUM
});
