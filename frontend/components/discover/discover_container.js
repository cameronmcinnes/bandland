import { connect } from 'react-redux';

import Discover from './discover';
import { fetchRecentAlbums } from '../../actions/album_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  discoverAlbums: Object.values(state.entities.albums) || []
});

const mapDispatchToProps = dispatch => ({
  fetchRecentAlbums: (limit) => dispatch(fetchRecentAlbums(limit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
