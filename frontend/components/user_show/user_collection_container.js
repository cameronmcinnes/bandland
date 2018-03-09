import { connect } from 'react-redux';

import AlbumIndex from './album_index';

const mapStateToProps = state => ({
  collectedAlbums: Object.values(state.entities.collectedAlbums),
});

const mapDispatchToProps = dispatch => ({
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndex);
