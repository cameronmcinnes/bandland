import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import GearDropdown from '../menus/gear_dropdown';

// TODO dry up code

const loggedInLinks = (currentUser, logout, toggleMenu, gearDropdownState) => (
	<nav className="thin-header-nav">
    <ul className='thin-header-nav-ul'>
      <li><a href='#'><img className='thin-header-logo' src={ window.mainLogo } /></a></li>
      <li><a href='#'>discover</a></li>
			<li><a href='#'>feed</a></li>
    </ul>

		<ul className='thin-header-nav-ul'>
      <li><a href='#'>collection</a></li>
			<li
				onClick={ () => toggleMenu('gearDropdown') }
				>
				<i><FontAwesome name='cog' /><FontAwesome name='caret-down' /></i>
			</li>
    </ul>

	</nav>
);

const sessionLinks = (toggleModal, loginGuest) => (
  <nav className="thin-header-nav">
    <ul className='thin-header-nav-ul'>
      <li><a href='#'><img className='thin-header-logo' src={ window.mainLogo } /></a></li>
      <li><a href='#'>discover</a></li>
    </ul>

		<ul className='thin-header-nav-ul'>
			<li><a onClick={ loginGuest }>guest log in</a></li>
      <li><a onClick={ () => toggleModal('signup') }>sign up</a></li>
      <li><Link to="/login">log in</Link></li>
    </ul>
  </nav>
);

const ThinHeader = ({ currentUser, logout, toggleModal, loginGuest, toggleMenu, gearDropdownState }) => {
	const nav = currentUser ?
		loggedInLinks(currentUser, logout, toggleMenu, gearDropdownState) : sessionLinks(toggleModal, loginGuest)
	return (
		<header className='thin-header'>
			{ nav }
			<GearDropdown toggleMenu={ toggleMenu } logout={ logout } open={gearDropdownState}/>
		</header>
	);
}

export default ThinHeader;
