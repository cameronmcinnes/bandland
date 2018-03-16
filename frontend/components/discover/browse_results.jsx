import React from 'react';

import BrowseResultItem from './browse_result_item';

class BrowseResults extends React.Component {
  componentDidMount() {
    this.props.fetchAlbumsByTag('all');
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.tagName !== nextProps.tagName) {
      this.props.fetchAlbumsByTag(nextProps.tagName);
    }
  }

  render() {
    const largeAlb = this.props.browsedAlbums[8];
    return (
      <div className='browse-results-container'>
        <ul className='browse-results-grid'>
          {
            this.props.browsedAlbums.slice(0,8).map((album, idx) => {
              return (
                <BrowseResultItem
                  album={ album }
                  key={ idx }
                  />
              );
            })
          }
        </ul>
        {
          this.props.browsedAlbums[8] &&
            <BrowseResultItem
            large={ true }
            album={ this.props.browsedAlbums[8] }
          /> }
      </div>
    );
  }
}

export default BrowseResults;
