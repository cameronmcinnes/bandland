import React from 'react';

export const SearchResultDropdown = props => {
  const userResults = props.userResults.map((user, idx) => (
    <li key={ idx }>
      <img src={ user.thumbnailProfileImgUrl } />
      <span>{ user.username }</span>
    </li>
  ));

  const hidden = (props.userResults.length === 0) ? 'hidden' : '';

  return (
    <ul className={ `search-dropdown ${hidden}` }>
      { userResults }
    </ul>
  );
};

export default SearchResultDropdown;

// componentDidMount() {
//   window.addEventListener('click', this.props.toggleSelf, {once: true} );
// }
