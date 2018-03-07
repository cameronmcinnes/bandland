import { connect } from 'react-redux';
import SessionFormModal from './session_form_modal';
import { login } from '../../../actions/session_actions';
import { toggleModal } from '../../../actions/ui_actions';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'Login',
  otherModal: 'signup'
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)).then(
    () => dispatch(toggleModal('signup'))
  ),
  toggleModal: (modalName) => dispatch(toggleModal(modalName)) 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionFormModal);
