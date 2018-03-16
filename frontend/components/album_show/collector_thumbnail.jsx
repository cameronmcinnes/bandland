import React from 'react';
import { Link } from 'react-router-dom';

const CollectorThumbnail = ({collector, currentUser}) => {
  const src = (currentUser && collector.id === currentUser.id ) ?
    currentUser.thumbnailProfileImgUrl : collector.thumbnailProfileImgUrl
  return (
    <li>
      <Link to={`/users/${collector.id}`}>
        <img src={ src } />
      </Link>
    </li>
  );
}

export default CollectorThumbnail;
