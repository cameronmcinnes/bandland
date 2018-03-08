import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import UserBio from './user_bio';
import UserEditFormContainer from '../user_edit/user_edit_container';
import UserCollection from './user_collection';

class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  render() {
    const { user, loading, showEditForm } = this.props;

    if (!user) return null;

    if (loading) return <h1>LOADING</h1>;
    const baseUrl = `/users/${this.props.match.params.userId}`;

    let boxShown = <UserBio
      user={ this.props.user }
      toggleEditForm={ this.props.toggleEditForm }
      />;

    if (showEditForm) {
      boxShown = <UserEditFormContainer
        user={ this.props.user}
        toggleEditForm={ this.props.toggleEditForm }
        />;
    }

    return (
      <div className='user-show-container'>
        <div className='user-banner-container'>
          <img className='user-banner-img'
            src={this.props.user.banner_img_url}></img>
        </div>

        { boxShown }

        <div className='user-show-grid-container'>
          <ul className='user-tabs'>
            <li><NavLink to={ baseUrl } exact >collection</NavLink></li>
            <li><NavLink to={ baseUrl + '/albums' } exact >albums</NavLink></li>
            <li><NavLink to={ baseUrl + '/followers' } >followers</NavLink></li>
            <li><NavLink to={ baseUrl + '/following' } >following</NavLink></li>
          </ul>

          <div className='user-show-grid'>
            <Route path={ baseUrl } component={ UserCollection } />
            <Route path={ baseUrl + '/followers' } />
            <Route path={ baseUrl + '/following' } />
          </div>
        </div>
      </div>
    );
  }
}

export default UserShow;
