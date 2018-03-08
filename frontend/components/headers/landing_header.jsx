import React from 'react';
import { Link } from 'react-router-dom';

// TODO dry up code

const personalGreeting = (currentUser, logout) => (
	<nav className="header-nav">
		<ul className='loggedin-header-nav-ul'>
      <li><span>Hello { currentUser.username.replace(/_/g, ' ') }</span></li>
			<li><a href='#'>feed</a></li>
			<li><a href='#'>collection</a></li>
			<li><a href='#'>wishlist</a></li>
    </ul>

		<ul className='loggedin-header-nav-ul'>
      <li><a onClick={logout}>log out</a></li>
    </ul>
	</nav>
);

const sessionLinks = (toggleModal, loginGuest) => (
  <nav className="header-nav">
		<span className="signed-out-msg">Welcome to the whimsicial land where bands reign supreme.</span>

		<ul>
			<li><a onClick={ loginGuest }>guest log in</a></li>
      <li><a onClick={ () => toggleModal('signup') }>sign up</a></li>
      <li><Link to="/login">log in</Link></li>
    </ul>
  </nav>
);

const LandingHeader = ({ currentUser, logout, toggleModal, loginGuest }) => {
	const nav = currentUser ?
		personalGreeting(currentUser, logout) : sessionLinks(toggleModal, loginGuest)
	return (
		<header className='main-header'>
			<div className='landing-header-div'>
				<a href='#'><img className='main-logo' src={ window.mainLogo } /></a>
				{ nav }
			</div>
		</header>
	);
}

export default LandingHeader;
