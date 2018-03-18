import React from 'react';

import BrowseResultAlbumItem from './browse_result_album_item';
import BrowseResultArtistItem from './browse_result_artist_item';

class BrowseResults extends React.Component {
  componentDidMount() {
    this.props.fetchEntitiesByTag('all');
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.tagName !== nextProps.tagName) {
      this.props.fetchEntitiesByTag(nextProps.tagName);
    }
  }

  resultItem(large, entity) {
    if (!entity) return null;
    if (this.props.browseType === 'albums') {
      return (
        <BrowseResultAlbumItem
        album={ entity }
        key={ entity.id }
        large={ large }
        />
      );
    } else if (this.props.browseType === 'artists') {
      return (
        <BrowseResultArtistItem
          artist={ entity }
          key={ entity.id }
          large={ large }
          />
      );
    }
  }

  render() {
    const largeAlb = this.props.browsedEntities[0];
    return (
      <div className='browse-results-container'>
        <ul className='browse-results-grid'>
          {
            this.props.browsedEntities.slice(1,8).map((entity) => {
              return ( this.resultItem(false, entity));
            })
          }
        </ul>

        { this.resultItem(true, this.props.browsedEntities[0]) }
      </div>
    );
  }
}

export default BrowseResults;
