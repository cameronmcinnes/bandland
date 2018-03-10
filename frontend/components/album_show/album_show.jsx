import React from 'react';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchAlbum(nextProps.match.params.userId);
    }
  }

  render() {
    const { album } = this.props;

    if (!album) return null;

    return (
      <div className="album-show-container">
        <h1>{album.title}</h1>
        <img src={album.coverImgUrl}></img>
      </div>
    );
  }
}

export default AlbumShow;
