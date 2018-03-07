import { connect } from 'react-redux';

import Modal from './modal';
import { toggleModal } from '../actions/ui_actions';
import { clearSessionErrors } from '../actions/session_actions';
import { selectOpenModal, selectTitle } from '../reducers/selectors';

// selectOpenModal will return nil if no modal open
const mapStateToProps = (state) => ({
  modalName: selectOpenModal(state),
  modalTitle: selectTitle(selectOpenModal(state))
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (modalName) => dispatch(toggleModal(modalName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
