import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'Login'
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
