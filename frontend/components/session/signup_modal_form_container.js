import { connect } from 'react-redux';

import SessionForm from './session_form';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import { toggleModal } from '../../actions/ui_actions';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'Signup',
  otherModal: 'login',
  modal: 'modal-'
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user)).then(
    () => dispatch(toggleModal('signup'))
  ),
  toggleModal: (modalName) => dispatch(toggleModal(modalName)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
