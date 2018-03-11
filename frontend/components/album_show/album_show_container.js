import { connect } from 'react-redux';

import { fetchAlbum } from '../../actions/album_actions';
import { fetchUser } from '../../actions/user_actions';
import { selectAlbumCollectors, selectAlbumTracks } from '../../reducers/selectors';
import { changeCurrentTrack, playPauseCurrentTrack } from '../../actions/ui_actions';

import AlbumShow from './album_show';


// TODO clean up this code w selectors
// QUESTION or just do big conditional return

const mapStateToProps = (state, { match }) => {
  const album = state.entities.albums[match.params.albumId];
  let artist;
  if (album) artist = state.entities.users[album.artistId];
  return {
    album,
    artist,
    currentUser: state.session.currentUser,
    collectors: selectAlbumCollectors(state, match),
    tracks: selectAlbumTracks(state, match),
    currentTrack: state.ui.currentTrack
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  changeCurrentTrack: track => dispatch(changeCurrentTrack(track)),
  playPauseCurrentTrack: () => dispatch(playPauseCurrentTrack())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);
