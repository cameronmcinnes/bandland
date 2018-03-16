import React from 'react';

import BrowseResultsContainer from './browse_results_container';

const tags = {
  all: { 1: 'rgb(49, 200, 35)', 2: 'rgb(49, 177, 37)' },
  electronic: { 1: 'rgb(66, 160, 189)', 2: 'rgb(67, 144, 168)'},
  metal: { 1: 'rgb(53, 100, 161)', 2: 'rgb(53, 91, 141)' },
  experimental: { 1: 'rgb(153, 74, 181)', 2: 'rgb(138, 74, 161)' },
  ambient: { 1: 'rgb(163, 194, 189)', 2: 'rgb(155, 182, 177)' },
  jazz: { 1: 'rgb(94, 159, 202)', 2: 'rgb(85, 148, 191)' },
  rap: { 1: 'rgb(233, 73, 73)', 2: 'rgb(225, 61, 61)' },
  pop: { 1: 'rgb(0, 204, 163)', 2: 'rgb(4, 179, 144)' }
};

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTag: 'all' };

    this.handleTagClick = this.handleTagClick.bind(this);
  }

  handleTagClick(e) {
    this.setState({ selectedTag: e.target.innerHTML });
  }

  render() {
    return (
      <div className='browse-container'>
        <div className='browse-top-bar'>
          <ul>
            {
              Object.keys(tags).map((tag, idx) => (
                <li key={ idx } className='tag-pill'
                  onClick={ this.handleTagClick }
                  >{ tag }</li>
              ))
            }
          </ul>
        </div>
        <BrowseResultsContainer tagName={ this.state.selectedTag } />
      </div>
    );
  }
}

export default Browse;
