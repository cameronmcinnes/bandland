import React from 'react';
import FontAwesome from 'react-fontawesome';

// TODO add conditional saying whether current user is user for edit button

const UserBio = ({user, currentUser, toggleEditForm}) => {
  let editButton = '';
  if (currentUser && currentUser.id === user.id) {
    editButton = (
      <button className='hollow-btn' onClick={ toggleEditForm }>
        <FontAwesome name='edit'/> EDIT PROFILE
      </button>
    );
  }

  return(
    <div className='user-bio-container'>
      <div className='user-profile-img-container'>
        <img className='user-profile-img' src={ user.profileImgUrl } />
      </div>

      <div className='bio-info'>

        <div className='bio-header'>
          <span className='user-name'>{ user.username }</span>
          { editButton }
        </div>

        <ul className='bio-info-list'>
          <li>{ user.location }</li>
          <li>this is where the genre will bel </li>
        </ul>

        <p className='bio-description'>{ user.description }</p>
        <div><a href={ user.ownSiteUrl }>{ user.ownSiteUrl }</a></div>
      </div>
    </div>
  );
}

export default UserBio;
