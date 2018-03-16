import React from 'react';
import { Link } from 'react-router-dom';

const BrowseResultItem = ({album, large}) => {
  if (!album) return null;
  const size = (large) ? 'large-result' : '';
  return (
    <div className={ `browse-result-item-box ${ size }`} >
      <Link to={ `/albums/${album.id}` }>
        <img src={ album.coverImgUrl }></img>
      </Link>
      <p>
        <span>{ album.title }</span>
        <span>by &nbsp;
          <Link to={ `/users/${album.artistId}` }>{ album.artistName }</Link>
        </span>
      </p>
    </div>
  );
};

export default BrowseResultItem;
