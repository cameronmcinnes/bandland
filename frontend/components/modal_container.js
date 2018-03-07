import { connect } from 'react-redux';

import Modal from './modal';
import { toggleModal } from '../actions/ui_actions';
import { clearSessionErrors } from '../actions/session_actions';

const mapStateToProps = (state) => ({
  modalOpen: state.ui.modalOpen
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal()),
  // clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
