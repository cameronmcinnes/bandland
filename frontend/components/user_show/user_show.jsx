import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import UserBio from './user_bio';
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
    const { user, loading } = this.props;

    if (!user) return null;

    if (loading) return <h1>LOADING</h1>;
    const baseUrl = `/users/${this.props.match.params.userId}`;

    return (
      <div className='user-show-container'>
        <div className='user-banner-container'></div>
        <UserBio user={ this.props.user }/>

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
    )
  }
}

export default UserShow;
