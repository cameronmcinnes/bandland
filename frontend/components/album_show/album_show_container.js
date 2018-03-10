import { connect } from 'react-redux';

import { fetchAlbum } from '../../actions/album_actions';
import { fetchUser } from '../../actions/user_actions';

import AlbumShow from './album_show';

const mapStateToProps = (state, { match }) => {
  const album = state.entities.albums[match.params.albumId];
  let artist;
  if (album) artist = state.entities.users[album.artistId];
  return {
    album,
    artist
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);
