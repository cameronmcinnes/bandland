import { connect } from 'react-redux';

import AlbumIndex from './album_index';
// import { createCollecting, destroyCollecting } from '../../actions/collecting_actions';
import { selectFollowers } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  users: selectFollowers(state, ownProps),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  // destroyCollecting: (collectedId) => dispatch(destroyCollecting(collectedId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndex);
