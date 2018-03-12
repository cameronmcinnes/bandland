import React from 'react';
import { Link } from 'react-router-dom';

class SearchResultDropdown extends React.Component {
  // install single use click handler on window only when the dropdown appears
  componentWillReceiveProps(nextProps) {
    if (this.props.userResults.length === 0 && nextProps.userResults.length > 0) {
      window.addEventListener('click', this.props.clearSearch, {once: true} );
    }
  }

  render() {
    const userResults = this.props.userResults.map((user, idx) => (
      <Link to={ `/users/${user.id}` }>
      <li key={ idx }>
          <img src={ user.thumbnailProfileImgUrl } />
          <p>
            <span>{ user.username }</span>
            <span>User</span>
          </p>
      </li>
      </Link>
    ));

    const hidden = (this.props.userResults.length === 0) ? 'hidden' : '';

    return (
      <ul className={ `search-dropdown ${hidden}` }>
        { userResults }
      </ul>
    );
  }
}

export default SearchResultDropdown;
