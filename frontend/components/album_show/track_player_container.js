import { connect } from 'react-redux';
// WTF TODO
import TrackPlayer from './track_player.jsx';

const mapStateToProps = state => ({
  track: state.ui.currentTrack
});

export default connect(
  mapStateToProps,
  null
)(TrackPlayer);


// could have ui reducer with current song clicking on other tracks in list
// dispatches action to change current song, then play box will receive props

// OR

// ...
