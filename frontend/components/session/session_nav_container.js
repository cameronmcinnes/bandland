import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SessionNav from './session_nav';
import { toggleModal } from '../../actions/ui_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  toggleModal: (modelOpen) => dispatch(toggleModal(modelOpen))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionNav);
