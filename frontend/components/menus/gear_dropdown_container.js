import { connect } from 'react-redux';

import GearDropdown from './gear_dropdown';
import { toggleMenu } from '../../actions/ui_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  open: state.ui.menus.gearDropdown
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  toggleSelf: () => dispatch(toggleMenu('gearDropdown'))
});

export default connect(
  null,
  mapDispatchToProps
)(GearDropdown);
