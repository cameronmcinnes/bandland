import { connect } from 'react-redux';

import AlbumIndex from './album_index';
import { selectCollectedAlbums } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  albums: selectCollectedAlbums(state, ownProps)
});

const mapDispatchToProps = dispatch => ({
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndex);
