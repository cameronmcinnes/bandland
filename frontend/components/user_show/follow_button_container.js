import { connect } from 'react-redux';

import FollowButton from './follow_button';
import { createFollowing, destroyFollowing } from '../../actions/following_actions';

const mapStateToProps = (state, ownProps) => ({
  following: ownProps.user.followerIds.includes(state.session.currentUser.id),
  user: ownProps.user,
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
  createFollowing: (following) => dispatch(createFollowing(following)),
  destroyFollowing: (followingId) => dispatch(destroyFollowing(followingId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowButton)
