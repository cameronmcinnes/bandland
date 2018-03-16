import { connect } from 'react-redux';

import { fetchUser, startLoadingUser } from '../../actions/user_actions';
import { toggleMenu, toggleModal } from '../../actions/ui_actions';
import { selectTags } from '../../reducers/selectors';

import UserShow from './user_show';

const mapStateToProps = (state, { match }) => {
  const user = state.entities.users[match.params.userId];
  return {
    user,
    // loading: state.ui.loading.showLoading,
    showEditForm: state.ui.menus.userEdit,
    currentUser: state.session.currentUser,
    profileImgUrl: state.ui.profile.profileImgUrl,
    bannerImgUrl: state.ui.profile.bannerImgUrl,
    userTags: selectTags(state, user)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  startLoadingUser: () => dispatch(startLoadingUser()),
  toggleEditForm: () => dispatch(toggleMenu('userEdit')),
  toggleModal: (modalName) => dispatch(toggleModal(modalName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
