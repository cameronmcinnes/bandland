import React from 'react';
import { Link } from 'react-router-dom';

import CollectorThumbnail from './collector_thumbnail';
import TrackPlayerContainer from './track_player_container';
import TrackListItem from './track_list_item';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.albumId !== nextProps.match.params.albumId) {
      this.props.fetchAlbum(nextProps.match.params.albumId);
    }
  }

  render() {
    const { album, artist, collectors, tracks, currentTrack } = this.props;

    if (!album || !artist ) return null;

    // for hover w/ download button use these event handles giving callbacks
    // that pass new props down to child
    // onMouseEnter={ () => 'add download button' }
    // onMouseLeave={ () => 'add take it aways button' }

    const trackList = tracks.map((track, idx) => {
      return <TrackListItem
        key={ idx }
        track={ track }
        currentTrack={ currentTrack }
        changeCurrentTrack={ this.props.changeCurrentTrack }
        playPauseCurrentTrack={ this.props.playPauseCurrentTrack }
        />;
    });

    return (
      <div className="album-show-container">
        <div className='artist-banner-container'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/e/e9/Aquitaine_banner_Landes_Forest.jpg'></img>
        </div>

        <div className='album-show-body-container'>
          <div className='album-detail-container'>
            <div className='album-show-info-container'>
              <h2>{album.title}</h2>
              <span>by </span>
              <Link to={ `/users/${artist.id}` }>{artist.username}</Link>

              <TrackPlayerContainer />

              <div className='album-purchase-container'>
                <a>Buy Digital Album</a> <span>${album.price} or more</span>
              </div>
              <p>
                {album.description}
                <span>released {album.releaseDate}</span>
              </p>

              <ul className='track-list'>
                { trackList }
              </ul>
            </div>
            <div className='album-show-cover-container'>
              <img className='album-show-cover' src={album.coverImgUrl}></img>
              <h5>supported by</h5>
              <ul className='collector-index'>
                {
                  collectors.map((collector, idx) => {
                    return <CollectorThumbnail
                      key={ idx }
                      collector={ collector }
                      />;
                  })
                }
              </ul>
            </div>
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

      </div>
    );
  }
}

export default AlbumShow;
