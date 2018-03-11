import React from 'react';
import FontAwesome from 'react-fontawesome';

class TrackPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.advanceSlider = this.advanceSlider.bind(this);
  }

  advanceSlider(e) {
    let ratio = e.target.currentTime / this.audio.duration;
    let pos = (this.progbar.offsetWidth * ratio) + this.progbar.offsetLeft;
    this.moveSliderTo(pos);
  }

  componentDidUpdate() {
    if (this.props.track.isPlaying) {
      // this.audio.addEventListener('loadedmetadata', () => {
      this.audio.play()
    } else {
      this.audio.pause();
    }
  }

  moveSliderTo(sliderPos) {
    // account for case before duration is loaded, slider will be NaN
    if (!sliderPos) return;
    const sliderWidth = this.slider.offsetWidth
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

  // moveSliderTo(sliderPos) {
  //   // account for case before duration is loaded, slider will be NaN
  //   if (!sliderPos) return;
  //   const progbarWidth = this.progbar.offsetWidth - this.slider.offsetWidth;
  //   const sliderLeft = sliderPos - this.progbar.offsetLeft;
  //
  //   const sliderHalf = (this.slider.offsetWidth / 2)
  //   // subtract 12, sliderHalf to move the middle of the slider
  //   // slider left >=
  //   if (sliderLeft >= -12 && sliderLeft < progbarWidth + 12) {
  //     this.slider.style.marginLeft = `${sliderLeft-12}px`;
  //   } else if (sliderLeft < -12) {
  //     this.slider.style.marginLeft = '0px';
  //   } else {
  //     this.slider.style.marginLeft = `${progbarWidth}px`;
  //   }
  // }

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


  render() {
    const { track, playPauseCurrentTrack } = this.props;
    const iconName = (track.isPlaying) ? 'pause' : 'play';

    return (
      <div className='play-box'>

        <audio ref={(audio) => this.audio = audio }
          src={ track.audioFileUrl }
          onTimeUpdate={ this.advanceSlider }/>

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
      </div>
    );
  }
}

export default TrackPlayer;
