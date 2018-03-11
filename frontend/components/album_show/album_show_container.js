import { connect } from 'react-redux';

import { fetchAlbum } from '../../actions/album_actions';
import { fetchUser } from '../../actions/user_actions';
import { selectAlbumCollectors, selectAlbumTracks } from '../../reducers/selectors';
import { receiveCurrentTrack, changeCurrentTrack } from '../../actions/ui_actions';

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
    // to handle case where there's no current track default state in current track reducer
    // sloppy?
    currentTrackId: state.ui.currentTrack.id
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)),
  changeCurrentTrack: track => dispatch(changeCurrentTrack(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);
