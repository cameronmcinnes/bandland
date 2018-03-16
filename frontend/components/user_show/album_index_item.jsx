import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const AlbumIndexItem = (props) => {
  const { destroyCollecting, album, currentUser, match} = props;
  const collection = Boolean(currentUser && destroyCollecting &&
    currentUser.id == match.params.userId);
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
          <div className='flx-container spc-btwn'>
            <span>by &nbsp;
              <Link to={ `/users/${album.artistId}` }>
                { album.artistName }
              </Link>
            </span>

            { collection &&
              <button className='collection-index-btn'
                onClick={ () => destroyCollecting(album.id)}>
                remove</button>
            }
          </div>
        </div>
      </div>
    </li>
  );
};

export default withRouter(AlbumIndexItem);
