import React from 'react';

class SearchResultDropdown extends React.Component {
  // install single use click handler on window only when the dropdown appears
  componentWillReceiveProps(nextProps) {
    if (this.props.userResults.length === 0 && nextProps.userResults.length > 0) {
      window.addEventListener('click', this.props.clearSearch, {once: true} );
    }
  }

  render() {
    const userResults = this.props.userResults.map((user, idx) => (
      <li key={ idx }>
        <img src={ user.thumbnailProfileImgUrl } />
        <span>{ user.username }</span>
      </li>
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
