import { connect } from 'react-redux';

import SearchResultDropdown from './search_result_dropdown';
import { selectUserResults } from '../../reducers/selectors';
// import { searchUsers } from '../../actions/user_actions';


const mapStateToProps = state => ({
  userResults: selectUserResults(state),
});

const mapDispatchToProps = dispatch => ({
  // searchUsers: (query) => dispatch(searchUsers(query))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultDropdown);
