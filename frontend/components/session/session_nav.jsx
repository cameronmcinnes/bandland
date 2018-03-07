import React from 'react';
import { Link } from 'react-router-dom';

// QUESTION is this the best way to do this logic?


const personalGreeting = (currentUser, logout) => (
	<nav className="header-nav">
		<ul>
      <li><span>Hello { currentUser.username }</span></li>
			<li><a href='#'>feed</a></li>
			<li><a href='#'>collection</a></li>
			<li><a href='#'>wishlist</a></li>
    </ul>

		<ul>
			<li><a href='#'>gift cards</a></li>
			<li><a href='#'>discover</a></li>
      <li><a className="header-button" onClick={logout}>log out</a></li>
    </ul>
	</nav>
);

const sessionLinks = (toggleModal) => (
  <nav className="header-nav">
		<span className="signed-out-msg">Welcome to the whimsicial land where bands reign supreme.</span>

		<ul>
			<li><a href='#'>gift cards</a></li>
			<li><a href='#'>discover</a></li>
      <li><a className="header-button" onClick={ () => toggleModal('signup') }>sign up</a></li>
      <li><Link to="/login">log in</Link></li>
    </ul>
  </nav>
);

const SessionNav = ({ currentUser, logout, toggleModal }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(toggleModal)
);

export default SessionNav;
