import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SessionNavContainer from './session/session_nav_container';
import { AuthRoute } from '../util/route_util';
import ModalContainer from './modal_container';
// import SignupModal from './signup_modal';

const App = () => (
  <div>
    <header className='main-header'>
      <a href='#'><img className='main-logo' src={ window.mainLogo } /></a>
      <SessionNavContainer/>
    </header>

    <AuthRoute
      path='/signup'
      component={ SignupFormContainer }
    />
    <AuthRoute
      path='/login'
      component={ LoginFormContainer }
    />

  <ModalContainer />

    <footer className='main-footer'>
      <ul>
      </ul>
    </footer>
  </div>
);

export default App;
