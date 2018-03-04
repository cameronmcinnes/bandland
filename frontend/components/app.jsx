import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SessionNavContainer from './session/session_nav_container'
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header className='main-header'>
      <a href='#'><img className='main-logo' src="https://i.imgur.com/dM90tWy.png" /></a>
      <SessionNavContainer/>
    </header>

    <AuthRoute path='/signup' component={ SignupFormContainer }/>
    <AuthRoute path='/login' component={ LoginFormContainer }/>

    <footer className='main-footer'>
      <ul>
      </ul>
    </footer>
  </div>
);

export default App;
