import React from 'react';

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

    if (!album) return null;

    return (
      <div className="album-show-container">
        <div className='artist-banner-container'>

        </div>

        <div className='album-detail-container'>
          <div className='album-info-container'>
            <h1>{album.title}</h1>

          </div>
          <img src={album.coverImgUrl}></img>
        </div>

        <div className='artist-detail-container'>
          <h1>{artist.username}</h1>
        </div>

      </div>
    );
  }
}

export default AlbumShow;
