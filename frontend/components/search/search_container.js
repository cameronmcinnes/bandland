import { connect } from 'react-redux';

import Search from './search';
import { searchUsers } from '../../actions/user_actions';
import { searchAlbums } from '../../actions/album_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  searchUsers: (query) => dispatch(searchUsers(query)),
  searchAlbums: (query) => dispatch(searchAlbums(query))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
