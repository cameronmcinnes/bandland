import { connect } from 'react-redux';

import GearDropdown from './gear_dropdown';
import { logout } from '../../actions/session_actions';

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  null,
  mapDispatchToProps
)(GearDropdown);
