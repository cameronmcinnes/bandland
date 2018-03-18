import React from 'react';

import BrowseResultsAlbumContainer from './browse_results_album_container';
import BrowseResultsArtistContainer from './browse_results_artist_container';

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTag: 'all', selectedEntity: 'albums' };

    this.handleTagClick = this.handleTagClick.bind(this);
    this.handleEntityClick = this.handleEntityClick.bind(this);
  }

  handleTagClick(e) {
    this.setState({ selectedTag: e.target.innerHTML });
  }

  handleEntityClick(e) {
    this.setState({ selectedEntity: e.target.innerHTML });
  }

  render() {
    const {selectedTag, selectedEntity} = this.state;
    const tags = ['all', 'electronic', 'metal', 'ambient', 'jazz', 'rap', 'pop',
      'k-pop', 'grunge', 'diy', 'disco', 'ballads'
    ];

    const usersSelected = (selectedEntity === 'artists') ? 'selected-tag' : '';
    const albumsSelected = (selectedEntity === 'albums') ? 'selected-tag' : '';

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
              onClick={ this.handleEntityClick }
              >albums</li>
            <li className={ `tag-pill ${usersSelected}` }
              onClick={ this.handleEntityClick }
              >artists</li>
          </ul>
        </div>

        {
          Boolean(albumsSelected) &&
          <BrowseResultsAlbumContainer
            tagName={ selectedTag } />
        }

        {
          Boolean(usersSelected) &&
          <BrowseResultsArtistContainer
            tagName={ selectedTag } />
        }
      </div>
    );
  }
}

export default Browse;
