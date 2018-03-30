import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

import FollowButtonContainer from './follow_button_container';

const UserBio = ({user, currentUser, toggleEditForm, userTags}) => {
  let editButton,
    uploadButton = '';
  let followButton = <FollowButtonContainer user={user}/>;
  if (currentUser && currentUser.id === user.id) {
    editButton = (<button className='hollow-btn' onClick={toggleEditForm}>
      <FontAwesome name='edit'/>
      EDIT PROFILE
    </button>);
    uploadButton = (<Link to={`/albums/new`}>
      <button className='hollow-btn'>
        <FontAwesome name='upload'/>
        ADD ALBUM
      </button>
    </Link>);
    followButton = '';
  }

  return (<div className='bio-info'>

    <div className='bio-header'>
      <span className='user-name'>{user.username}</span>
      {followButton}
      {editButton}
      {uploadButton}
    </div>

    <ul className='bio-info-list'>
      <li>{user.location}</li>
      <li>tags: {userTags.join(', ')}</li>
    </ul>

    <p className='bio-description'>{user.description}</p>
    <div>
      <a href={user.ownSiteUrl}>{user.ownSiteUrl}</a>
    </div>
  </div>);
}

export default UserBio;
