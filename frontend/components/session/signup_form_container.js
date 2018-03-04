import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'Signup'
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
