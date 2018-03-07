import React from 'react';
import FontAwesome from 'react-fontawesome';

import SignupModalFormContainer from './session/modals/signup_modal_form_container';
import LoginModalFormContainer from './session/modals/login_modal_form_container';

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

    return (
      <div className={`modal ${openClass}`}>
        <div className="modal-box">
          <div className='modal-title-bar'>
            <h4>Sign Up for a Bandland fan account</h4>
            <i onClick={ this.resetModal }><FontAwesome name='times' /></i>
          </div>

          <SignupModalFormContainer />

        </div>
        <div onClick={ this.resetModal } className="modal-screen"></div>
       </div>
    );
  }
}

export default Modal;
