import React from 'react';

import BrowseResultsContainer from './browse_results_container';

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
    const {selectedTag} = this.state;
    const tags = ['all', 'electronic', 'metal', 'ambient', 'jazz', 'rap', 'pop'];

    return (
      <div className='browse-container'>
        <div className={ `browse-top-bar ${selectedTag}` }>
          <ul className='tag-pill-list'>
            {
              tags.map((tag, idx) => {
                const selected = (selectedTag === tag) ? 'selected-tag' : '';
                return (
                  <li key={ idx } className={ `tag-pill ${selected}` }
                    onClick={ this.handleTagClick }
                    >{ tag }</li>
                );
              })
            }
          </ul>
        </div>
        <BrowseResultsContainer
          tagName={ selectedTag } />
      </div>
    );
  }
}

export default Browse;
