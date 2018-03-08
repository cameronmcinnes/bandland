import { connect } from 'react-redux';

import { fetchUser } from '../../actions/user_actions';
import { toggleMenu } from '../../actions/ui_actions';
import UserShow from './user_show';

const mapStateToProps = (state, { match }) => {
  const user = state.entities.users[match.params.userId];
  return {
    user,
    loading: state.ui.loading.showLoading,
    showEditForm: state.ui.menus.userEdit,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  toggleEditForm: () => dispatch(toggleMenu('userEdit'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
