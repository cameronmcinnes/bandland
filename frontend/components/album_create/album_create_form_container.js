import { connect } from 'react-redux';

import { createAlbum } from '../../actions/album_actions';

import AlbumCreateForm from './album_create_form';

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.match.params.userId,
  artistName: state.entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = (dispatch, getState) => ({
  createAlbum: (data, userId) => dispatch(createAlbum(data, userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumCreateForm);
