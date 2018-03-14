import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createAlbum, startUploadingAlbum, clearAlbumErrors } from '../../actions/album_actions';

import AlbumCreateForm from './album_create_form';

const mapStateToProps = (state) => ({
  userId: state.session.currentUser.id,
  artistName: state.session.currentUser.username,
  loading: state.ui.loading.albumUploading,
  albumErrors: state.errors.albums
});

const mapDispatchToProps = (dispatch) => ({
  startUploadingAlbum: () => dispatch(startUploadingAlbum()),
  createAlbum: (data, userId) => dispatch(createAlbum(data, userId)),
  clearAlbumErrors: (field) => dispatch(clearAlbumErrors(field))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumCreateForm));
