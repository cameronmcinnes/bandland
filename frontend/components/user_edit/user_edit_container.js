import { connect } from 'react-redux';
// best way to do this ?
import { withRouter } from 'react-router-dom';

import { updateUser } from '../../actions/user_actions';
import UserEditForm from './user_edit_form';

// make sure to pass in user as prop to container
const mapStateToProps = (state, ownProps) => ({
  user: ownProps.user,
  toggleEditForm: ownProps.toggleEditForm,
  userId: ownProps.match.params.userId
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (id, data) => dispatch(updateUser(id, data))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserEditForm));
