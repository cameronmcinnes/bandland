import React from 'react';

import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.albumId !== nextProps.match.params.albumId) {
      this.props.fetchAlbum(nextProps.match.params.albumId);
    }
  }

  render() {
    const { album, artist } = this.props;

    if (!album || !artist) return null;

    return (
      <div className="album-show-container">
        <div className='artist-banner-container'>

        </div>

        <div className='album-detail-container'>
          <div className='album-show-info-container'>
            <h1>{album.title}</h1>
            <span>by</span>
            <Link to={ `/users/${artist.id}` }>{artist.username}</Link>
            <div className='album-purchase-container'>
              <a>Buy Digital Album</a> <span>${album.price} or more</span>
            </div>
            <p>
              {album.description}
              <span>released {album.releaseDate}</span>
            </p>
          </div>

          <img src={album.coverImgUrl}></img>
        </div>

        <div className='artist-detail-container'>
          <img className='album-artist-profile-img' src={artist.profileImgUrl} />
          <h1>{artist.username}</h1>
          <span>{artist.location}</span>
          <button>Follow</button>
          <p>{artist.description}</p>
          <a>{artist.ownSiteUrl}</a>
        </div>

      </div>
    );
  }
}

export default AlbumShow;
