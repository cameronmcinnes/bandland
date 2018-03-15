import { connect } from 'react-redux';

import { fetchAlbum } from '../../actions/album_actions';
import { fetchUser } from '../../actions/user_actions';
import { createCollecting, destroyCollecting } from '../../actions/collecting_actions';
import { selectAlbumCollectors, selectAlbumTracks, selectArtistDiscog, selectTags } from '../../reducers/selectors';
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
    discog: selectArtistDiscog(state, match),
    currentUser: state.session.currentUser,
    collectors: selectAlbumCollectors(state, match),
    tracks: selectAlbumTracks(state, match),
    currentTrack: state.ui.currentTrack,
    tagNames: selectTags(state, album)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  changeCurrentTrack: track => dispatch(changeCurrentTrack(track)),
  playPauseCurrentTrack: () => dispatch(playPauseCurrentTrack()),
  createCollecting: (collecting) => dispatch(createCollecting(collecting)),
  destroyCollecting: (collectedId) => dispatch(destroyCollecting(collectedId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);
