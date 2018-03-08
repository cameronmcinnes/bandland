import React from 'react';

const GearDropdown = (props) => {
  if (props.open) {
    return (
      <div id="gear-dropdown"
        onBlur={ () => props.toggleMenu('gearDropdown') }
        tabIndex='0'
        autoFocus
        >
        <a onClick={() => props.logout()}>log out</a>
      </div>
    );
  }
  return <div></div>;
}

export default GearDropdown;
