import React from 'react';
import { Link } from 'react-router-dom';

const AlbumIndexItem = ({album, destroyCollecting}) => {
  const collection = Boolean(destroyCollecting)
  return (
    <li>
      <div className='album-info-container'>
        <div className='album-info-main'>
          <Link to={ `/albums/${album.id}` }>
            <img className='album-cover' src={ album.coverImgUrl } />
          </Link>
        </div>
        <div className='album-info-detail'>
          <h5 className='album-title'>{ album.title }</h5>
          <span>by <Link to={ `/users/${album.artistId}` }>{ album.artistName }</Link></span>

          { collection &&
            <button className='collection-index-btn'
              onClick={ () => destroyCollecting(album.id)}>
              remove</button>
          }
        </div>
      </div>
    </li>
  );
};

export default AlbumIndexItem;
