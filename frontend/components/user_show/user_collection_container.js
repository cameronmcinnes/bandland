import { connect } from 'react-redux';

import AlbumIndex from './album_index';
import { createCollecting, destroyCollecting } from '../../actions/collecting_actions';
import { selectCollectedAlbums } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  albums: selectCollectedAlbums(state, ownProps)
});

const mapDispatchToProps = dispatch => ({
  destroyCollecting: (collectedId) => dispatch(destroyCollecting(collectedId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndex);
