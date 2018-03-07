import { connect } from 'react-redux';

import { fetchUser } from '../../actions/user_actions';
import UserShow from './user_show';

const mapStateToProps = (state, { match }) => {
  const user = state.entities.users[match.params.userId];
  return {
    user,
    loading: state.ui.loading.showLoading
  }
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);

// const mapStateToProps = (state, ownProps) => {
//   const pokemon = state.entities.pokemon[ownProps.match.params.pokemonId];
//
//   return {
//     pokemon,
//     items: selectPokeItems(state, pokemon),
//     loading: state.ui.loading.detailLoading
//   };
// };
