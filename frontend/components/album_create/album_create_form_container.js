import { connect } from 'react-redux';

import { createAlbum, startUploadingAlbum } from '../../actions/album_actions';

import AlbumCreateForm from './album_create_form';

const mapStateToProps = (state) => ({
  userId: state.session.currentUser.id,
  artistName: state.session.currentUser.username,
  loading: state.ui.loading.albumUploading
});

const mapDispatchToProps = (dispatch) => ({
  startUploadingAlbum: () => dispatch(startUploadingAlbum()),
  createAlbum: (data, userId) => dispatch(createAlbum(data, userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumCreateForm);
