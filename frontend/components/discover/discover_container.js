import { connect } from 'react-redux';

import Discover from './discover';
import { fetchRecentAlbums } from '../../actions/album_actions';
import { selectRecentAlbums } from '../../reducers/selectors';

// inefficient cause i sort in backend, should send up array of ids

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  discoverAlbums: selectRecentAlbums(state.entities.albums)
});

const mapDispatchToProps = dispatch => ({
  fetchRecentAlbums: (limit) => dispatch(fetchRecentAlbums(limit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
