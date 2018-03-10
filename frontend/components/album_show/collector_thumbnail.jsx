import React from 'react';
import { Link } from 'react-router-dom';

const CollectorThumbnail = ({collector}) => (
  <li>
    <Link to={`/users/${collector.id}`}>
      <img src={ collector.thumbnailProfileImgUrl } />
    </Link>
  </li>
);

export default CollectorThumbnail;
