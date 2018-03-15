import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logout, login } from '../../actions/session_actions';
import { toggleModal, toggleMenu } from '../../actions/ui_actions';
import ThinHeader from './thin_header';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  gearDropdownState: state.ui.menus.gearDropdown
});

const guest = {
  user: {
    username: 'beloved_guest',
    password: 'demo_user'
  }
};

const mapDispatchToProps = (dispatch, getState) => ({
  toggleModal: (modalName) => dispatch(toggleModal(modalName)),
  toggleMenu: (menu) => dispatch(toggleMenu(menu)),
  loginGuest: () => dispatch(login(guest))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ThinHeader));
