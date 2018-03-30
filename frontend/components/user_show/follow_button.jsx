import React from 'react';
import FontAwesome from 'react-fontawesome';

const FollowButton = (props) => {
  const {following, createFollowing, destroyFollowing, currentUser, user} = props
  const handleClick = () => {
    following ? destroyFollowing(user.id) : createFollowing({follower_id: currentUser.id, followee_id: user.id})
  }
  return (
    <button className='hollow-btn'
      onClick={handleClick}>
      <FontAwesome name={ following ? 'check' : 'plus'}/>
      { following ? 'FOLLOWING' : 'FOLLOW' }
    </button>
  );
}

export default FollowButton;
