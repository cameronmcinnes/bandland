import { connect } from 'react-redux';

import { logout } from '../actions/session_actions';
import { toggleModal } from '../actions/ui_actions';
import LandingNav from './landing_nav';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  toggleModal: (modalName) => dispatch(toggleModal(modalName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingNav);
