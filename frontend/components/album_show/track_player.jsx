import React from 'react';
import FontAwesome from 'react-fontawesome';

class TrackPlayer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   play: false,
    //   iconName: 'play'
    // };

    // this.togglePlay = this.togglePlay.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.advanceHandle = this.advanceHandle.bind(this);
    // this.handleDrag = this.handleDrag.bind(this);
  }

  advanceHandle(e) {
    let ratio = e.target.currentTime / this.audio.duration;
    let pos = (this.progbar.offsetWidth * ratio) + this.progbar.offsetLeft;
    this.moveHandleTo(pos);
  }

  // componentDidMount() {
  //   // this.props.receiveCurrentTrack(this.props.firstTrack)
  // }

  // togglePlay(e) {
  //   e.preventDefault();
  //   if (this.state.play) {
  //     this.audio.pause();
  //
  //     // this.setState({ play: false, iconName: 'play' });
  //   } else {
  //     this.audio.play();
  //     // this.setState({ play: true, iconName: 'pause' });
  //   }
  // }

  // or component did update
  componentDidUpdate() {
    if (this.props.isPlaying) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  moveHandleTo(handlePos) {
    const progbarWidth = this.progbar.offsetWidth - this.handle.offsetWidth;
    const handleLeft = handlePos - this.progbar.offsetLeft;

    const sliderHalf = (this.handle.offsetWidth / 2)
    // subtract 12, sliderHalf to move the middle of the slider
    // handle left >=
    if (handleLeft >= -12 && handleLeft < progbarWidth + 12) {
      this.handle.style.marginLeft = `${handleLeft-12}px`;
    } else if (handleLeft < -12) {
      this.handle.style.marginLeft = '0px';
    } else {
      this.handle.style.marginLeft = `${progbarWidth}px`;
    }
  }

  handleMouseMove(e) {
    this.moveHandleTo(e.pageX);
    this.audio.currentTime = ((e.pageX - this.progbar.offsetLeft) / this.progbar.offsetWidth) * this.audio.duration;
  }

  handleMouseDown(e) {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp) ;
  }

  handleMouseUp(e) {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  // handleDrag(e) {
  //   e.preventDefault()
  //   debugger;
  // }

  render() {
    const { track, isPlaying, playPauseCurrentTrack } = this.props;
    const iconName = (isPlaying) ? 'pause' : 'play';

    return (
      <div className='play-box'>
        <audio ref={(audio) => this.audio = audio }
          src={ track.audioFileUrl }
          onTimeUpdate={ this.advanceHandle }/>
        <button className='play-button'
          onClick={ playPauseCurrentTrack }>
          <FontAwesome name={ iconName } />
        </button>

        <div className='title-progbar-box'>
          <span>{track.title} </span>
          <div className='prog-bar'
            ref={ (progbar) => this.progbar = progbar}
            onMouseDown={ this.handleMouseDown}
            onClick={ this.handleMouseMove }>
            <div className='prog-bar-handle'
              ref={ (handle) => this.handle = handle}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default TrackPlayer;

// onDrag={ this.handleDrag }
