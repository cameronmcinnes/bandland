import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import GearDropdownContainer from '../menus/gear_dropdown_container';
import SearchContainer from '../search/search_container'

// TODO make this class component so it can have state to add classname on gear

const ThinHeader = ({ currentUser, logout, toggleModal, loginGuest, toggleMenu, gearDropdownState }) => {
	return (
    <div>
    <div className='border'></div>
		<header className='thin-header'>
      <nav className="thin-header-nav">
        <div className='thin-header-left-box'>
        <ul className='thin-header-nav-ul'>
          <li id='logo-li'><a href='#'><img className='thin-header-logo' src={ window.mainLogo } /></a></li>
          <li><a href='#'>discover</a></li>
          { Boolean(currentUser) &&
            <li><a href='#'>feed</a></li>
          }
        </ul>
        <SearchContainer />
        </div>

          { Boolean(currentUser) &&
            <ul className='thin-header-nav-ul'>
              <li><Link to={`/users/${currentUser.id}`}>collection</Link></li>
              <li id='gear-dropdown-li' onClick={ (e) => { e.stopPropagation(); toggleMenu('gearDropdown')} } >
                <i><FontAwesome name='cog' /><FontAwesome name='caret-down' /></i>
                { Boolean(gearDropdownState) && <GearDropdownContainer /> }
              </li>
            </ul>
          }

          { Boolean(!currentUser) &&
            <ul className='thin-header-nav-ul'>
              <li><a onClick={ loginGuest }>guest log in</a></li>
              <li><a onClick={ () => toggleModal('signup') }>sign up</a></li>
              <li><Link to="/login">log in</Link></li>
            </ul>
          }

    	</nav>
		</header>
    </div>
	);
}

export default ThinHeader;
