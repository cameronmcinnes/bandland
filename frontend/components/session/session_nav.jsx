import React from 'react';
import { Link } from 'react-router-dom';

const personalGreeting = (currentUser, logout) => (
	<nav className="header-group">
    <a className="header-button" onClick={logout}>Log Out</a>
	</nav>
);

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign up!</Link>
  </nav>
);

const SessionNav = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default SessionNav;
