import { connect } from 'react-redux';
// WTF TODO
import TrackPlayer from './track_player.jsx';
import {
  playPauseCurrentTrack,
  changeCurrentTrack
} from '../../actions/ui_actions';

const mapStateToProps = state => ({
  track: state.ui.currentTrack,
  tracks: state.entities.tracks
  // isPlaying: state.ui.currentTrack.isPlaying
});

const mapDispatchToProps = dispatch => ({
  playPauseCurrentTrack: () => dispatch(playPauseCurrentTrack()),
  changeCurrentTrack: (track) => dispatch(changeCurrentTrack(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackPlayer);


// could have ui reducer with current song clicking on other tracks in list
// dispatches action to change current song, then play box will receive props

// OR

// ...
