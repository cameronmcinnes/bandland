import React from 'react';

import GearDropdownContainer from './gear_dropdown_container';

const Menu = (props) => {
  const openClass = ( props.menuName ) ? 'is-open' : '';
  let menuShown;
  switch( props.menuName) {
    case "gearDropdown":
      menuShown = <GearDropdownContainer />;
  }

  return (
    <div className={`menu ${openClass}`}>
      { menuShown }
    </div>

  );
};

export default Menu;
