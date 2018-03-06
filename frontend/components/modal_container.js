import { connect } from 'react-redux';

import Modal from './modal';
import { toggleModal } from '../actions/ui_actions';

const mapStateToProps = (state) => ({
  modalOpen: state.ui.modalOpen
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
