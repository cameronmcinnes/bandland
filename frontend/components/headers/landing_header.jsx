import React from 'react';
import { Link } from 'react-router-dom';

import SearchContainer from '../search/search_container';
// TODO dry up code

const personalGreeting = (currentUser, logout) => (
	<nav className="header-nav">
		<ul className='loggedin-header-nav-ul'>
      <li><span>Hello { currentUser.username.replace(/_/g, ' ') }</span></li>
			<li><Link to={`/users/${currentUser.id}`}>collection</Link></li>
    </ul>

		<ul className='loggedin-header-nav-ul'>
      <li><a onClick={logout}>log out</a></li>
    </ul>
	</nav>
);

const sessionLinks = (toggleModal, loginRedirect) => (
  <nav className="header-nav">
		<span className="signed-out-msg">Welcome to the whimsicial land where bands reign supreme.</span>

		<ul>
      <li><a onClick={ loginRedirect }>guest log in</a></li>
      <li><a onClick={ () => toggleModal('signup') }>sign up</a></li>
      <li><Link to="/login">log in</Link></li>
    </ul>
  </nav>
);

const LandingHeader = ({ currentUser, logout, toggleModal, loginGuest, history}) => {
  const loginRedirect = () => {
    return loginGuest().then(
      ({currentUser}) => history.push(`/users/${currentUser.id}`)
    );
  };

	const nav = currentUser ?
		personalGreeting(currentUser, logout) : sessionLinks(toggleModal, loginRedirect)
	return (
		<header className='main-header'>
			<div className='landing-header-div'>
				<div className='landing-logo-search'>
          <a href='#'><img className='main-logo' src={ window.mainLogo } /></a>
          <SearchContainer />
        </div>
				{ nav }
			</div>
		</header>
	);
}

export default LandingHeader;
