import { connect } from 'react-redux';

import Menu from './_menu';
import { toggleMenu } from '../../actions/ui_actions';
import { selectOpenMenu } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  menuName: selectOpenMenu(state)
});

export default connect(
  mapStateToProps,
  null
)(Menu);
