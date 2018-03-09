import React from 'react';

import AlbumIndexItem from './album_index_item';

const AlbumIndex = ({collectedAlbums}) => {
  
  return (
   <div className='album-index-container'>
     <ul>
       {
         collectedAlbums.map((alb, idx) => {
           return <AlbumIndexItem album={ alb } key={ idx } />
         })
       }
     </ul>
   </div>
  );
};

export default AlbumIndex;
