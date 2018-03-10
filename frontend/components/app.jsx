import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import LandingHeaderContainer from './headers/landing_header_container';
import SessionHeader from './headers/session_header';
import ThinHeaderContainer from './headers/thin_header_container';
import { AuthRoute } from '../util/route_util';
import ModalContainer from './modals/modal_container';
import UserShowContainer from './user_show/user_show_container';
import AlbumShowContainer from './album_show/album_show_container';

const App = () => (
  <div>
    <Switch>
      <Route path='/signup' component={ SessionHeader } />
      <Route path='/login' component={ SessionHeader } />
      <Route path='/' exact component={ LandingHeaderContainer } />
      <Route path='/' component={ ThinHeaderContainer } />
    </Switch>

    <AuthRoute
      path='/signup'
      component={ SignupFormContainer }
      />
    <AuthRoute
      path='/login'
      component={ LoginFormContainer }
      />

    <Route path='/users/:userId' component={ UserShowContainer }/>
    <Route path='/albums/:albumId' component={ AlbumShowContainer } />

    <ModalContainer />

    <footer className='main-footer'>
      <ul>
      </ul>
    </footer>
  </div>
);

export default App;
