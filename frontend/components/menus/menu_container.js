import { connect } from 'react-redux';

import Menu from './menu';
import { toggleMenu } from '../../actions/ui_actions';
import { selectOpenMenu } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  menuName: selectOpenMenu(state)
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: (menuName) => dispatch(toggleMenu(menuName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
