import React from 'react';

const AlbumIndexItem = ({album}) => {
  return (
    <li>
      <div className='album-info-container'>
        <img className='album-cover' src={ album.coverImgUrl } />
        <h4>{ album.title }</h4>
      </div>
    </li>
  );
};

export default AlbumIndexItem;
