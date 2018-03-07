import React from 'react';
import { Link } from 'react-router-dom';

// QUESTION is this the best way to do this logic?


const personalGreeting = (currentUser, logout) => (
	<nav className="header-nav">
    <a className="header-button" onClick={logout}>log out</a>
	</nav>
);

const sessionLinks = (toggleModal) => (
  <nav className="header-nav">
    <ul>
      <li><a className="header-button" onClick={ toggleModal }>sign up</a></li>
      <li><Link to="/login">log in</Link></li>
    </ul>
  </nav>
);

const SessionNav = ({ currentUser, logout, toggleModal }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(toggleModal)
);

export default SessionNav;
