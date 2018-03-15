import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import GearDropdownContainer from '../menus/gear_dropdown_container';
import SearchContainer from '../search/search_container';

// TODO make this class component so it can have state to add classname on gear

const ThinHeader = (props) => {
  const {currentUser, logout, toggleModal, toggleMenu, gearDropdownState, loginGuest} = props;

  const loginRedirect = () => {
    return loginGuest().then(
      ({currentUser}) => props.history.push(`/users/${currentUser.id}`)
    );
  };

  return (
    <div className='thin-header-container'>
    <div className='border'></div>
		<header className='thin-header'>
      <nav className="thin-header-nav">
        <div className='thin-header-left-box'>
        <ul className='thin-header-nav-ul'>
          <li id='logo-li'><a href='#'><img className='thin-header-logo' src={ window.mainLogo } /></a></li>
          <li><a href='#'>discover</a></li>
        </ul>
        <SearchContainer />
        </div>

          { Boolean(currentUser) &&
            <ul className='thin-header-nav-ul'>
              <li><Link to={`/users/${currentUser.id}`}>collection</Link></li>
              <li id='gear-dropdown-li' onClick={ (e) => { e.stopPropagation(); toggleMenu('gearDropdown');} } >
                <i><FontAwesome name='cog' /><FontAwesome name='caret-down' /></i>
                { Boolean(gearDropdownState) && <GearDropdownContainer /> }
              </li>
            </ul>
          }

          { Boolean(!currentUser) &&
            <ul className='thin-header-nav-ul'>
              <li><a onClick={ loginRedirect }>guest log in</a></li>
              <li><a onClick={ () => toggleModal('signup') }>sign up</a></li>
              <li><Link to="/login">log in</Link></li>
            </ul>
          }

    	</nav>
		</header>
    </div>
	);
};

export default ThinHeader;

// <li><Link to='/guest'>guest log in</Link></li>
