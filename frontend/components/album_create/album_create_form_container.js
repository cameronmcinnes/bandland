import { connect } from 'react-redux';

import { createAlbum, startLoadingAlbum } from '../../actions/album_actions';

import AlbumCreateForm from './album_create_form';

const mapStateToProps = (state) => ({
  userId: state.session.currentUser.id,
  artistName: state.session.currentUser.username
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingAlbum: () => dispatch(startLoadingAlbum()),
  createAlbum: (data, userId) => dispatch(createAlbum(data, userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumCreateForm);
