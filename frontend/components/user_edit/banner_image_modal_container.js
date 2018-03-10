import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ImageUploadModal from './image_upload_modal';
import { receiveNewProfilePicture } from '../../actions/ui_actions';

const mapStateToProps = (state) => ({
  imgType: 'banner'
});

const mapDispatchToProps = dispatch => ({
  receiveNewProfilePicture: (picType, pic, url) => dispatch(receiveNewProfilePicture(picType, pic, url)),
  updateUser: (id, data) => dispatch(updateUser(id, data))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageUploadModal));
