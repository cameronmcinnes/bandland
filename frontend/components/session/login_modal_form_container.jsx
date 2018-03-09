import { connect } from 'react-redux';

import SessionForm from './session_form';
import { login, clearSessionErrors } from '../../actions/session_actions';
import { toggleModal } from '../../actions/ui_actions';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'Login',
  otherModal: 'signup',
  modal: 'modal-',
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)).then(
    () => dispatch(toggleModal('login'))
  ),
  toggleModal: (modalName) => dispatch(toggleModal(modalName)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
