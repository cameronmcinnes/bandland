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

const mapDispatchToProps = dispatch => ({
  toggleModal: (modalName) => dispatch(toggleModal(modalName)),
  loginGuest: (history) => dispatch(login(guest)),
  toggleMenu: (menu) => dispatch(toggleMenu(menu))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ThinHeader));
