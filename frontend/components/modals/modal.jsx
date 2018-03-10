import React from 'react';
import FontAwesome from 'react-fontawesome';

import SignupModalFormContainer from '../session/signup_modal_form_container';
import LoginModalFormContainer from '../session/login_modal_form_container';
import ProfileImageModalContainer from '../user_edit/profile_image_modal_container';
import BannerImageModalContainer from '../user_edit/banner_image_modal_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.resetModal = this.resetModal.bind(this);
  }

  resetModal() {
    this.props.toggleModal(this.props.modalName);
  }

  render() {
    const openClass = ( this.props.modalName ) ? 'is-open' : '';
    let modalShown;
    switch(this.props.modalName) {
      case "signup":
        modalShown = <SignupModalFormContainer />;
        break;
      case "login":
        modalShown = <LoginModalFormContainer />;
        break;
      case "profileImage":
        modalShown = <ProfileImageModalContainer />;
        break;
      case "bannerImage":
        modalShown = <BannerImageModalContainer />;
    }
    return (
      <div className={`modal ${openClass}`}>
        <div className="modal-box">
          <div className='modal-title-bar'>
            <h4>{this.props.modalTitle}</h4>
            <i onClick={ this.resetModal }><FontAwesome name='times' /></i>
          </div>

          { modalShown }

        </div>
        <div onClick={ this.resetModal } className="modal-screen"></div>
       </div>
    );
  }
}

export default Modal;
