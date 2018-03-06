import React from 'react';

import SignupModalFormContainer from './session/modals/signup_modal_form_container';
import LoginModalFormContainer from './session/modals/login_modal_form_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const openClass = ( this.props.modalOpen ) ? 'is-open' : '';

    return (
      <div className={`modal ${openClass}`}>
        <div className="modal-box">
          <div className='modal-title-bar'>
            <h4>Sign Up for a Bandland fan account</h4>
            <i className="fas fa-times" onClick={ this.props.toggleModal }></i>
          </div>

          <SignupModalFormContainer />

        </div>
        <div onClick={ this.props.toggleModal } className="modal-screen"></div>
       </div>
    );
  }
}

export default Modal;
