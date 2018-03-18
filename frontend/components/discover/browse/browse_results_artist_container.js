import { connect } from 'react-redux';

import BrowseResults from './browse_results';
import { fetchUsersByTag } from '../../../actions/user_actions';
import { selectBrowsedUsers } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  browsedEntities: selectBrowsedUsers(state),
  tagName: ownProps.tagName,
  browseType: 'artists'
});

const mapDispatchToProps = dispatch => ({
  fetchEntitiesByTag: (tag) => dispatch(fetchUsersByTag(tag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseResults);
