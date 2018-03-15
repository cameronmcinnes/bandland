import React from 'react';

import FeaturedAlbums from './featured_albums';
import RecentAlbums from './recent_albums';
import BrowseContainer from './browse_container';

class Discover extends React.Component {
  componentDidMount() {
    this.props.fetchRecentAlbums(15);
  }

  render() {
    const { discoverAlbums } = this.props;
    const featuredAlbums = discoverAlbums.slice(0, 4);
    const recentAlbums = discoverAlbums.slice(4);

    if (discoverAlbums.length < 10) return null;

    return (
      <div className='discover-container'>
        <FeaturedAlbums featuredAlbums={ featuredAlbums }/>
        <BrowseContainer />
        <RecentAlbums recentAlbums={ recentAlbums } />
      </div>

    );
  }
}

export default Discover;
