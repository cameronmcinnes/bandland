import { connect } from 'react-redux';

import Discover from './discover';
import { fetchRecentAlbums } from '../../actions/album_actions';
import { selectRecentAlbums } from '../../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  discoverAlbums: selectRecentAlbums(state)
});

const mapDispatchToProps = dispatch => ({
  fetchRecentAlbums: (limit) => dispatch(fetchRecentAlbums(limit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
