import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';

const Auth = ({component: Component, path, currentUser, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    !currentUser ? (
      <Component {...props} />
    ) : (
      <Redirect to={ `/users/${currentUser.id}` } />
    )
  )}/>
);

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
