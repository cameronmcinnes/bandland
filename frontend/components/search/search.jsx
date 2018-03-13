import React from 'react';
import FontAwesome from 'react-fontawesome';

import SearchResultDropdownContainer from '../menus/search_result_dropdown_container';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.executeQuery = this.executeQuery.bind(this);
  }

  executeQuery() {
    this.props.searchUsers(this.state.query);
    this.props.searchAlbums(this.state.query);
  }

  handleChange(e) {
    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
    this.setState({query: e.currentTarget.value}, () =>  {
      this.timeOut = setTimeout(this.executeQuery, 300);
    });
  }

  render() {
    return(
      <div className='search-container'>
        <div className='search-field-container'>
          <input
            className='search-field'
            type='text'
            placeholder='search bandland    '
            onChange={ this.handleChange }
            onBlur={ () => this.setState({ query: ''})}
            value={ this.state.query }
            >
          </input>
          <FontAwesome name='search' />
        </div>
        <SearchResultDropdownContainer />
      </div>
    );
  }
}

export default Search;
