import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

// TEST imports
import * as SessionActions from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  // TEST start
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.login = SessionActions.login
  window.logout = SessionActions.logout
  window.signup = SessionActions.signup
  // TEST end

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
