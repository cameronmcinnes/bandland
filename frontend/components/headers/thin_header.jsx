import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import GearDropdown from '../menus/gear_dropdown';

const ThinHeader = ({ currentUser, logout, toggleModal, loginGuest, toggleMenu, gearDropdownState }) => {
	return (
		<header className='thin-header'>
      <nav className="thin-header-nav">
        <ul className='thin-header-nav-ul'>
          <li><a href='#'><img className='thin-header-logo' src={ window.mainLogo } /></a></li>
          <li><a href='#'>discover</a></li>
          { Boolean(currentUser) &&
            <li><a href='#'>feed</a></li>
          }
        </ul>

          { Boolean(currentUser) &&
            <ul className='thin-header-nav-ul'>
              <li><Link to={`/users/${currentUser.id}`}>collection</Link></li>
              <li id='gear-dropdown-li' onClick={ () => toggleMenu('gearDropdown') } >
                <i><FontAwesome name='cog' /><FontAwesome name='caret-down' /></i>
                { currentUser &&
                  <GearDropdown toggleMenu={ toggleMenu } logout={ logout } open={gearDropdownState}/>
                }
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
	);
}

export default ThinHeader;
