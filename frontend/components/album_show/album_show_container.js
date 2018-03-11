import { connect } from 'react-redux';

import { fetchAlbum } from '../../actions/album_actions';
import { fetchUser } from '../../actions/user_actions';
import { selectAlbumCollectors } from '../../reducers/selectors';
import { changeCurrentTrack } from '../../actions/ui_actions';

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
    tracks: Object.values(state.entities.tracks),
    // to handle case where there's no current track default state in current track reducer
    // sloppy?
    currentTrackId: state.ui.currentTrack.id
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  changeCurrentTrack: trackId => dispatch(changeCurrentTrack(trackId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);
