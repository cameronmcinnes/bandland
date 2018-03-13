import { connect } from 'react-redux';

import SearchResultDropdown from './search_result_dropdown';
import { selectUserResults, selectAlbumResults } from '../../reducers/selectors';
import { clearSearch } from '../../actions/ui_actions';


const mapStateToProps = state => ({
  userResults: selectUserResults(state),
  albumResults: selectAlbumResults(state)
});

const mapDispatchToProps = dispatch => ({
  clearSearch: () => dispatch(clearSearch())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultDropdown);
