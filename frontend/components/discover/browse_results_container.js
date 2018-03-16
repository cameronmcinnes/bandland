import { connect } from 'react-redux';

import BrowseResults from './browse_results';
import { fetchAlbumsByTag } from '../../actions/album_actions';
import { selectBrowsedAlbums } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  browsedAlbums: selectBrowsedAlbums(state),
  tagName: ownProps.tagName
});

const mapDispatchToProps = dispatch => ({
  fetchAlbumsByTag: (tag) => dispatch(fetchAlbumsByTag(tag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseResults);
