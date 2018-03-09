import React from 'react';

const AlbumIndexItem = ({album}) => {
  return (
    <li>
      <div className='album-info-container'>
        <div className='album-info-main'>
          <img className='album-cover' src={ album.coverImgUrl } />
          <span className='album-title'>{ album.title }</span>
        </div>
        <div className='album-info-detail'>

        </div>
      </div>
    </li>
  );
};

export default AlbumIndexItem;
