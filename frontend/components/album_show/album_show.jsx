import React from 'react';
import { Link } from 'react-router-dom';

import CollectorThumbnail from './collector_thumbnail';
import TrackPlayerContainer from './track_player_container';
import TrackListItem from './track_list_item';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleCollectAdd = this.handleCollectAdd.bind(this);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.albumId !== nextProps.match.params.albumId) {
      this.props.fetchAlbum(nextProps.match.params.albumId);
    }
  }

  handleCollectAdd(e) {
    const collecting = {
      collector_id: this.props.currentUser.id,
      collected_id: this.props.match.params.albumId
    };

    this.props.createCollecting({collecting});
  }

  render() {
    const { album, artist, collectors, tracks, currentTrack, discog} = this.props;

    if (!album || !artist ) return null;

    const trackList = tracks.map((track, idx) => {
      return <TrackListItem
        key={ idx }
        track={ track }
        currentTrack={ currentTrack }
        changeCurrentTrack={ this.props.changeCurrentTrack }
        playPauseCurrentTrack={ this.props.playPauseCurrentTrack }
        />;
    });

    const discogList = discog.map((album, idx) => {
      return (
        <li key={ idx }>
          <Link to={`/albums/${album.id}`}>
            <img src={ album.coverImgUrl }/>
            { album.title }
          </Link>
          <span className='small-text'>{ album.releaseDate }</span>
        </li>
      );
    });

    return (
      <div className="album-show-container">
        <div className='artist-banner-container'>
          <img src={ artist.bannerImgUrl }></img>
        </div>

        <div className='album-show-body-container'>
          <div className='album-detail-container'>
            <div className='album-show-info-container'>
              <h2>{album.title}</h2>
              <span>by </span>
              <Link to={ `/users/${artist.id}` }>{artist.username}</Link>

              <TrackPlayerContainer />

              <div className='album-purchase-container'>
                <p>
                  <a>Buy Album</a> <span>
                  <strong>${album.price}</strong> or more</span>
                </p>
                <a onClick={ this.handleCollectAdd }>
                  Add to collection
                </a>
                <a onClick={ () => this.props.destroyCollecting(album.id) }>
                  Remove from collection
                </a>
              </div>

              <ul className='track-list'>
                { trackList }
              </ul>

              <p>
                {album.description}
                <span>released {album.releaseDate}</span>
              </p>
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
            <Link to={ `/users/${artist.id}` }>
              <img className='album-artist-profile-img' src={artist.profileImgUrl} />
              <h3>{artist.username}</h3>
            </Link>
            <span className='small-text'>{artist.location}</span>
            <button>Follow</button>
            <span><a href={ artist.ownSiteUrl }>{artist.ownSiteUrl}</a></span>
            <ul className='album-artist-discog'>
              <Link to={ `/users/${artist.id}/discography` }><span>discography</span></Link>
              { discogList }
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default AlbumShow;
