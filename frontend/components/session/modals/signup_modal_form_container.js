import { connect } from 'react-redux';
import SignupModal from './signup_modal';
import { signup } from '../../../actions/session_actions';
import { toggleModal } from '../../../actions/ui_actions';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'Signup'
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user)).then(() => dispatch(toggleModal()))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupModal);
