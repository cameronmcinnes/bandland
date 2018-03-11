import { connect } from 'react-redux';
// WTF TODO
import TrackPlayer from './track_player.jsx';
import {
  playPauseCurrentTrack
} from '../../actions/ui_actions';

const mapStateToProps = state => ({
  track: state.ui.currentTrack,
  // isPlaying: state.ui.currentTrack.isPlaying
});

const mapDispatchToProps = dispatch => ({
  playPauseCurrentTrack: () => dispatch(playPauseCurrentTrack())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackPlayer);


// could have ui reducer with current song clicking on other tracks in list
// dispatches action to change current song, then play box will receive props

// OR

// ...
