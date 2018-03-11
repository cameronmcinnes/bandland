import React from 'react';
import FontAwesome from 'react-fontawesome';

class  TrackListItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const {
      track,
      currentTrack,
      changeCurrentTrack,
      playPauseCurrentTrack
    } = this.props

    if (currentTrack.id === track.id) {
      playPauseCurrentTrack();
    } else {
      changeCurrentTrack(track);
    }
  }

  render() {
    const { track, currentTrack } = this.props
    const icon = (currentTrack.id === track.id
      && currentTrack.isPlaying ) ? 'pause' : 'play'
      return (
        <li className='track-list-item'>
          <button onClick={ this.handleClick }>
            <FontAwesome name={ icon } />
          </button>

          <span>{track.ord}. {track.title} {track.duration}</span>
        </li>
      );
  }
}

export default TrackListItem;
