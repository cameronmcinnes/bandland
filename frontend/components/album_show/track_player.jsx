import React from 'react';
import FontAwesome from 'react-fontawesome';

class TrackPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.advanceSlider = this.advanceSlider.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
  }

  advanceSlider(e) {
    let ratio = this.audio.currentTime / this.audio.duration;
    // let ratio = e.target.currentTime / this.audio.duration;
    let pos = (this.progbar.offsetWidth * ratio) + this.progbar.offsetLeft;
    this.moveSliderTo(pos);
  }

  componentDidUpdate() {
    if (this.props.track.isPlaying) {
      this.audio.play();
      this.timeOut = setInterval(this.advanceSlider, 3);
    } else {
      this.audio.pause();
      clearInterval(this.timeOut);
    }
  }

  moveSliderTo(sliderPos) {
    // account for case before duration is loaded, slider will be NaN
    if (!sliderPos) return;
    const sliderWidth = this.slider.offsetWidth;
    const progbarWidth = this.progbar.offsetWidth;
    const sliderMiddle = sliderPos - this.progbar.offsetLeft;

    if (sliderMiddle >= 0 && sliderMiddle < progbarWidth ) {
      this.slider.style.marginLeft = `${sliderMiddle}px`;
    } else if (sliderMiddle < 0) {
      this.slider.style.marginLeft = '0px';
    } else {
      this.slider.style.marginLeft = `${progbarWidth}px`;
    }
  }

  handleMouseMove(e) {
    this.moveSliderTo(e.pageX);
    this.audio.currentTime = (
      (e.pageX - this.progbar.offsetLeft) / this.progbar.offsetWidth) *
      this.audio.duration;
  }

  handleMouseDown(e) {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp) ;
  }

  handleMouseUp(e) {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  changeTrack(diff) {
    const nextOrd = this.props.track.ord + diff;
    this.props.changeCurrentTrack(this.props.tracks[nextOrd - 1]);
  }

  handleEnd(e) {
    if (this.props.track.ord >= Object.values(this.props.tracks).length) {

    } else {
      this.changeTrack(1);
    }
  }

  render() {
    const { track, playPauseCurrentTrack, tracks} = this.props;
    const iconName = (track.isPlaying) ? 'pause' : 'play';
    const backDisabled = (track.ord === 1) ? true : false;
    const frwdDisabled = (track.ord >= Object.values(tracks).length) ? true : false;

    return (
      <div className='play-box'>

        <audio ref={(audio) => this.audio = audio }
          src={ track.audioFileUrl }
          onEnded={ this.handleEnd }
          />

        <button className='play-button'
          onClick={ playPauseCurrentTrack }>
          <FontAwesome name={ iconName } />
        </button>

        <div className='title-progbar-box'>
          <span>{track.title} </span>

          <div className='prog-bar-container'>
            <div className='prog-bar'
              ref={ (progbar) => this.progbar = progbar}
              onMouseDown={ this.handleMouseDown}
              onClick={ this.handleMouseMove }>

              <div className='prog-bar-slider'
                ref={ (slider) => this.slider = slider}
                />

            </div>
          </div>
        </div>
        <div className='ff-buttons'>
          <button onClick={ () => this.changeTrack(-1) }
            disabled={ backDisabled }>
            <FontAwesome name={ 'fast-backward'}/>
          </button>

          <button onClick={ () => this.changeTrack(1) }
            disabled={ frwdDisabled }>
            <FontAwesome name={ 'fast-forward'}/>
          </button>
        </div>
      </div>
    );
  }
}

export default TrackPlayer;

// onTimeUpdate={ this.advanceSlider }
