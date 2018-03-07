import React from 'react';

const UserBio = ({user}) => {
  return(
    <div className='user-bio-container'>
      <div className='user-profile-img-container'></div>

      <div className='bio-info'>

        <div className='bio-header'>
          <span className='user-name'>{ user.username }
          </span>
        </div>

        <ul className='bio-info-list'>
          <li>{ user.location }</li>
          <li>this is where the genre will bel </li>
        </ul>

        <p className='bio-description'>{ user.description }<br></br>rgreg</p>
        <div><a href={ user.own_site_url }>{ user.own_site_url }</a></div>
      </div>
    </div>
  );
}

export default UserBio;
