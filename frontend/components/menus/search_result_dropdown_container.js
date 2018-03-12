import { connect } from 'react-redux';

import SearchResultDropdown from './search_result_dropdown';
import { selectUserResults } from '../../reducers/selectors';
import { clearSearch } from '../../actions/ui_actions';


const mapStateToProps = state => ({
  userResults: selectUserResults(state),
});

const mapDispatchToProps = dispatch => ({
  clearSearch: () => dispatch(clearSearch())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultDropdown);
