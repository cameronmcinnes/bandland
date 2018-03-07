import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import LandingNavContainer from './landing_nav_container';
import { AuthRoute } from '../util/route_util';
import ModalContainer from './modals/modal_container';

const App = () => (
  <div>
    <header className='main-header'>
      <div className='main-header-div'>
        <a href='#'><img className='main-logo' src={ window.mainLogo } /></a>
        <Switch>
          <Route path='/signup' />
          <Route path='/login' />
          <Route path='/' component={ LandingNavContainer } />
        </Switch>
      </div>
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
