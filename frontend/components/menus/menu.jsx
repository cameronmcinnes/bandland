import React from 'react';

import GearDropdownContainer from './gear_dropdown_container';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.resetMenu = this.resetMenu.bind(this);
  }

  resetMenu() {
    this.props.toggleMenu(this.props.menuName);
  }

  render() {
    const openClass = ( this.props.menuName ) ? 'is-open' : '';
    let menuShown;
    switch(this.props.menuName) {
      case "gearDropdown":
        menuShown = <GearDropdownContainer />;
    }

    return (
      <div className={`menu ${openClass}`}
        ref={ dropdown => this.dropdown = dropdown }>
        { menuShown }

      </div>

    );
  }
}

export default Menu;

// <div className='menu-screen'
//   onClick={ this.resetMenu }></div>
