import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SessionNav from './session_nav';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionNav);
