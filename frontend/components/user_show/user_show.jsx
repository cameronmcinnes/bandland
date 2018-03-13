import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import UserBio from './user_bio';
import UserEditFormContainer from '../user_edit/user_edit_container';
import UserCollectionContainer from './user_collection_container';
import UserOwnAlbumContainer from './user_own_albums_container';

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
    // collector will be defined when coming from album show page
    // need to check if fully fetched
    if (!(user && user.email && user.collectedAlbumIds )) return null;

    if (loading) return <div className="loader">Loading...</div>;

    const baseUrl = `/users/${this.props.match.params.userId}`;

    let editOverlay, bannerEdit = '';
    let boxShown = <UserBio
      user={ this.props.user }
      toggleEditForm={ this.props.toggleEditForm }
      currentUser={ this.props.currentUser }
      />;

    if (showEditForm) {
      editOverlay = <div
        className='image-edit-overlay'
        onClick={ () => this.props.toggleModal('profileImage') }
        >
          <FontAwesome name='camera' />
        </div>;
      bannerEdit = (
        <div className='banner-img-edit'
          onClick={ () => this.props.toggleModal('bannerImage') }
          ><FontAwesome name='camera' /> change banner image</div>
        );
      boxShown = <UserEditFormContainer
        user={ this.props.user}
        toggleEditForm={ this.props.toggleEditForm }
        />;
    }

    return (
      <div className='user-show-container'>
        <div className='user-banner-container'
          style={ {backgroundImage: `url(${this.props.bannerImgUrl})`} }>

          { bannerEdit }
        </div>

        <div className='user-show-box'>
          <div className='user-bio-container'>
            <div className='user-profile-img-container'
              style={ {backgroundImage: `url(${this.props.profileImgUrl})`} }>
              { editOverlay }
            </div>

            { boxShown }
          </div>


          <ul className='user-tabs'>
            <li><NavLink to={ baseUrl } exact >collection <span className='count'>{user.collectedAlbumIds.length}</span></NavLink></li>
            <li><NavLink to={ baseUrl + '/discography' } >discography <span className='count'>{user.ownAlbumIds.length}</span></NavLink></li>
            <li><NavLink to={ baseUrl + '/followers' } >followers</NavLink></li>
            <li><NavLink to={ baseUrl + '/following' } >following</NavLink></li>
          </ul>

          <div className='user-show-grid-container'>
            <div className='user-show-grid'>
              <Route path='/users/:userId' exact component={ UserCollectionContainer } />
              <Route path='/users/:userId/discography' component={ UserOwnAlbumContainer } />
              <Route path='/users/:userId/followers' />
              <Route path='/users/:userId/following' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserShow;
