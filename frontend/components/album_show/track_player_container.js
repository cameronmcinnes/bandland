import { connect } from 'react-redux';
import { sortBy } from 'lodash';
// WTF TODO
import TrackPlayer from './track_player.jsx';
import {
  playPauseCurrentTrack,
  changeCurrentTrack
} from '../../actions/ui_actions';

const mapStateToProps = state => ({
  track: state.ui.currentTrack,
  tracks: sortBy(Object.values(state.entities.tracks), 'ord')
});

const mapDispatchToProps = dispatch => ({
  playPauseCurrentTrack: () => dispatch(playPauseCurrentTrack()),
  changeCurrentTrack: (track, paused) => dispatch(changeCurrentTrack(track, paused))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackPlayer);
