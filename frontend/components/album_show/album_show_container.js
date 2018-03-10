import { connect } from 'react-redux';

import { fetchAlbum } from '../../actions/album_actions';

import AlbumShow from './album_show';

const mapStateToProps = (state, { match }) => {
  const album = state.entities.albums[match.params.albumId];
  // debugger;
  return {
    album,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);
