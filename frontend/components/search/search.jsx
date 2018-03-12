import React from 'react';

import FontAwesome from 'react-fontawesome';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    // this.handleChange = this.debounce(this.handleChange, 300);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
    this.setState({query: e.currentTarget.value}, () =>  {
      this.timeOut = setTimeout(() => this.props.searchUsers(this.state.query), 300);
    });
  }

  // debounce(func, wait) {
  //   // this.func(...args);
  //   return (...args) => setInterval( this.func(...args), wait);
  // }

  render() {
    return(
      <div className='search-div'>
        <input
          className='search-field'
          type='text'
          placeholder='search bandland'
          onChange={ this.handleChange }
          >
        </input>
        <FontAwesome name='search' />
      </div>
    );
  }
}

export default Search;
