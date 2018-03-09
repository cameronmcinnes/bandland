import { connect } from 'react-redux';

import ProfileImageModal from './profile_image_modal';
import { receiveNewProfilePicture } from '../../actions/ui_actions';

// const mapStateToProps = state => ({
//
// });

const mapDispatchToProps = dispatch => ({
  receiveNewProfilePicture: (pic, url) => dispatch(receiveNewProfilePicture(pic, url))
});

export default connect(
  null,
  mapDispatchToProps
)(ProfileImageModal);
