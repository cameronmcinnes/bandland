import React from 'react';
import FontAwesome from 'react-fontawesome';

const TrackListItem = ({track, isCurrentTrack, changeCurrentTrack}) => {
  const icon = (isCurrentTrack) ? 'pause' : 'play'
  return (
    <li className='track-list-item'>
      <button onClick={ () => changeCurrentTrack(track) }>
        <FontAwesome name={ icon } />
      </button>

      <span>{track.ord}. {track.title} {track.duration}</span>
    </li>
  );
}

export default TrackListItem;
