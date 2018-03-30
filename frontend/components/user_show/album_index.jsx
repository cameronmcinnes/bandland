import React from 'react';

import AlbumIndexItem from './album_index_item';
import BrowseResultArtistItem from '../discover/browse/browse_result_artist_item';

const AlbumIndex = ({albums, users, destroyCollecting, currentUser}) => {
  const gridContents = (albums) ?
    albums.map((alb, idx) => {
      return <AlbumIndexItem album={ alb }
        destroyCollecting={ destroyCollecting }
        currentUser={ currentUser }
        key={ alb.id } />
    }) :
    users.map(user => {
      return <li><BrowseResultArtistItem artist={ user } key={ user.id } /></li>
    });

  return (
   <div className='album-index-container'>
     <ul className='album-index-grid'>
       {
         gridContents
       }
     </ul>
   </div>
  );
};

export default AlbumIndex;
