import React from 'react';
import { Link } from 'react-router-dom';

const BrowseResultArtistItem = ({artist, large}) => {
  if (!artist) return null;
  const size = (large) ? 'large-result' : '';
  debugger;
  const desc = artist.description.substring(0, 100);
  return (
    <div className={ `browse-result-item-box ${ size }`} >
      <Link to={ `/artists/${artist.id}` }>
        <img src={ artist.profileImgUrl }></img>
      </Link>
      <p>
        <span>{ artist.username }</span>
        <span> { size && desc} </span>
      </p>
    </div>
  );
};

export default BrowseResultArtistItem;
