import { connect } from 'react-redux';

import AlbumIndex from './album_index';
import { selectOwnAlbums } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  albums: selectOwnAlbums(state, ownProps)
});

const mapDispatchToProps = dispatch => ({
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndex);
