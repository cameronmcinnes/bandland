import { connect } from 'react-redux';

import BrowseResults from './browse_results';
import { fetchAlbumsByTag } from '../../../actions/album_actions';
import { selectBrowsedAlbums } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  browsedEntities: selectBrowsedAlbums(state),
  tagName: ownProps.tagName,
  browseType: 'albums'
});

const mapDispatchToProps = dispatch => ({
  fetchEntitiesByTag: (tag) => dispatch(fetchAlbumsByTag(tag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseResults);
