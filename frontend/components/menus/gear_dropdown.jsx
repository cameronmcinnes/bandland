import React from 'react';

class GearDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('click', this.props.toggleSelf, {once: true} );
  }

  render() {
    return (
      <div id="gear-dropdown" >
        <div>
          <a onClick={ this.props.logout }>log out</a>
        </div>
      </div>
    );
  }
}


export default GearDropdown;
