import React from 'react';

import AlbumIndexItem from './album_index_item';

const AlbumIndex = ({albums}) => {

  return (
   <div className='album-index-container'>
     <ul className='album-index-grid'>
       {
         albums.map((alb, idx) => {
           return <AlbumIndexItem album={ alb } key={ idx } />
         })
       }
     </ul>
   </div>
  );
};

export default AlbumIndex;