import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedAlbums = ({ featuredAlbums }) => (
  <div className='featured-albums-container'>
    <div className='large-pane'
      style={ { backgroundImage: `url(${featuredAlbums[0].coverImgUrl})`} }>
      <Link to={ `/albums/${featuredAlbums[0].id}` }>
        <div className='flx-container flx-end'>
          <p>
            <strong>{ featuredAlbums[0].title }</strong>
            { featuredAlbums[0].description.substring(0, 50) }...
          </p>
        </div>
      </Link>
    </div>

    <ul className='small-pane-list'>
      {
        featuredAlbums.slice(1).map((album, idx) => (
          <li  key={ idx }
            style={ { backgroundImage: `url(${album.coverImgUrl})`} }>
            <Link to={ `/albums/${album.id}` }>
              <div className='flx-container flx-end'>
                <p>
                  <strong>{ album.title }</strong>
                  { album.description.substring(0, 50) }...
                </p>
              </div>
            </Link>
          </li>
        ))
      }
    </ul>
  </div>
);

export default FeaturedAlbums;
