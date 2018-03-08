import React from 'react';

const GearDropdown = (props) => {
  if (props.open) {
    return (
      <div id="gear-dropdown">
        <a onClick={() => props.logout()}>log out</a>
      </div>
    );
  }
  return <div></div>;
}

export default GearDropdown;
