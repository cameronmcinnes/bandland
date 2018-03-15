import React from 'react';

import AlbumIndex from '../user_show/album_index';

const RecentAlbums = ({ recentAlbums }) => (
  <div className='recent-albums-container'>
    <h2 className='recent-albums-header' >New and Notable</h2>
    <AlbumIndex albums={ recentAlbums } />
  </div>
);

export default RecentAlbums;
