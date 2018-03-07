import { connect } from 'react-redux';

import { logout, login } from '../actions/session_actions';
import { toggleModal } from '../actions/ui_actions';
import LandingNav from './landing_nav';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const guest = {
  user: {
    username: 'beloved_guest',
    password: 'demo_user'
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  toggleModal: (modalName) => dispatch(toggleModal(modalName)),
  loginGuest: () => dispatch(login(guest))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingNav);
