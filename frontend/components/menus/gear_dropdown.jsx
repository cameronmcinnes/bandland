import React from 'react';

const GearDropdown = ({ logout }) => (
  <div id="gear-dropdown" >
    <a onClick={() => logout()}>log out</a>
  </div>
);

export default GearDropdown;
