import React from 'react';
import { Link } from 'react-router-dom';

const personalGreeting = (currentUser, logout) => (
	<nav className="header-group">
    <a className="header-button" onClick={logout}>Log Out</a>
	</nav>
);

const sessionLinks = (toggleModal) => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <a className="header-button" onClick={ toggleModal }>Sign up!</a>
  </nav>
);

const SessionNav = ({ currentUser, logout, toggleModal }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(toggleModal)
);

export default SessionNav;
