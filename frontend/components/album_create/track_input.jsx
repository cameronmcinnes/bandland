import React from 'react';
import FontAwesome from 'react-fontawesome';

// TODO functional component

const TrackInput = (props) => {
  const { track } = props;
  const errorClass = (!track.title || !track.audio_file) ? 'error-info' : '';

  if (track.selected) {
    return (
      <div className='album-input-container'>
        <div className= {`track-info ${errorClass}`}>
          <div>
            <FontAwesome name='bars'/>
            <p><strong>{props.ord + 1}</strong>{ track.title }</p>
          </div>
          <FontAwesome name='times'
            onClick={ props.deleteTrackInput(props.ord) }/>
        </div>

        <div className='album-create-right-column'>
          <div className='track-input'>
            <label>track title
              <input
                className='track-input-field'
                onKeyPress={e => {
                  if (e.key === 'Enter') e.preventDefault();
                }}
                type='text'
                value={ track.title }
                onChange={ props.updateTrackInputField('title', props.ord) }
                ></input>
            </label>
          </div>
          { errorClass && <div className='album-errors'>title required</div>}
        </div>
      </div>
    );
  } else {
    return (
      <div className= {`track-info info-deselected ${errorClass}`}
        onClick={ props.selectTrack(props.ord) }>
        <div>
          <FontAwesome name='bars'/>
          <p><strong>{props.ord + 1}</strong>{ track.title || 'untitled' }</p>
        </div>
        <FontAwesome name='times'
          onClick={ props.deleteTrackInput(props.ord) }/>
      </div>
    );
  }
};

export default TrackInput;
