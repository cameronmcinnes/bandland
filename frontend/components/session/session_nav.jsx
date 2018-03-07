import React from 'react';
import { Link } from 'react-router-dom';

const personalGreeting = (currentUser, logout) => (
	<nav className="header-group">
    <a className="header-button" onClick={logout}>log out</a>
	</nav>
);

const sessionLinks = (toggleModal) => (
  <nav className="login-signup">
    <a className="header-button" onClick={ toggleModal }>sign up</a>
    <Link to="/login">log in</Link>
  </nav>
);

const SessionNav = ({ currentUser, logout, toggleModal }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(toggleModal)
);

export default SessionNav;
