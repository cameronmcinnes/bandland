import React from 'react';

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
      <form>
        <input
          type='text'
          placeholder='searchBandcamp'
          onChange={ this.handleChange }
          >
        </input>
      </form>
    );
  }
}

export default Search;
