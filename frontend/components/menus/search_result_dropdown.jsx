import React from 'react';
import { Link } from 'react-router-dom';

class SearchResultDropdown extends React.Component {
  // install single use click handler on window only when the dropdown appears
    // ie when the dropdown is empty and is about to be populated
  componentWillReceiveProps({userResults, albumResults}) {
    if (this.props.userResults.length === 0 &&
      this.props.albumResults.length === 0 &&
      (userResults.length > 0 || albumResults.length > 0)) {
      window.addEventListener('click', this.props.clearSearch, {once: true} );
    }
  }

  render() {
    const userResults = this.props.userResults.map((user, idx) => (
      <Link to={ `/users/${user.id}` } key={ idx }>
      <li>
          <img src={ user.thumbnailProfileImgUrl } />
          <p>
            <span>{ user.username }</span>
            <span>User</span>
          </p>
      </li>
      </Link>
    ));

    const albumResults = this.props.albumResults.map((album, idx) => (
      <Link to={ `/albums/${album.id}` } key={ idx }>
      <li>
          <p>
            <span>{ album.title }</span>
            <span>Album</span>
          </p>
      </li>
      </Link>
    ));

    const hidden = (this.props.userResults.length === 0 &&
      this.props.albumResults.length === 0) ? 'hidden' : '';

    return (
      <ul className={ `search-dropdown ${hidden}` }>
        { userResults }
        { albumResults }
      </ul>
    );
  }
}

export default SearchResultDropdown;
