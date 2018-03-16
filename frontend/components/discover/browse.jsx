import React from 'react';

import BrowseResultsContainer from './browse_results_container';

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTag: 'all', selectedParam: 'albums' };

    this.handleTagClick = this.handleTagClick.bind(this);
    this.handleParamClick = this.handleParamClick.bind(this);
  }

  handleTagClick(e) {
    this.setState({ selectedTag: e.target.innerHTML });
  }

  handleParamClick(e) {
    this.setState({ selectedParam: e.target.innerHTML });
  }

  render() {
    const {selectedTag, selectedParam} = this.state;
    const tags = ['all', 'electronic', 'metal', 'ambient', 'jazz', 'rap', 'pop',
      'k-pop', 'grunge', 'diy', 'disco', 'ballads'
    ];
    const usersSelected = (selectedParam === 'artists') ? 'selected-tag' : '';
    const albumsSelected = (selectedParam === 'albums') ? 'selected-tag' : '';

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
        <div className={ `browse-top-bar ${selectedTag} bar-2` }>
          <ul className='tag-pill-list'>
            <li className={ `tag-pill ${albumsSelected}` }
              onClick={ this.handleParamClick }
              >albums</li>
            <li className={ `tag-pill ${usersSelected}` }
              onClick={ this.handleParamClick }
              >artists</li>
          </ul>
        </div>
        <BrowseResultsContainer
          tagName={ selectedTag } />
      </div>
    );
  }
}

export default Browse;
