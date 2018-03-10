import { connect } from 'react-redux';
// best way to do this ? TODO dont need withrouter i think
import { withRouter } from 'react-router-dom';

import { updateUser } from '../../actions/user_actions';
import { receiveNewProfilePicture } from '../../actions/ui_actions';

import UserEditForm from './user_edit_form';

const mapStateToProps = (state, ownProps) => ({
  user: ownProps.user,
  toggleEditForm: ownProps.toggleEditForm,
  userId: ownProps.match.params.userId,
  profileImg: state.ui.profile.profileImg,
  bannerImg: state.ui.profile.bannerImg
});

// should prob make a cancel image change action
const mapDispatchToProps = (dispatch, getState) => ({
  updateUser: (id, data) => dispatch(updateUser(id, data)),
  cancelImageChange: (profileImgUrl, bannerImgUrl) => {
    dispatch(receiveNewProfilePicture('profile', '', profileImgUrl));
    dispatch(receiveNewProfilePicture('banner', '', bannerImgUrl));
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserEditForm));
