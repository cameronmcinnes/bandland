import React from 'react';

import FeaturedAlbums from './featured_albums';
import RecentAlbums from './recent_albums';
import Browse from './browse';

class Discover extends React.Component {
  componentDidMount() {
    this.props.fetchRecentAlbums(20);
  }

  render() {
    const { discoverAlbums } = this.props;
    const featuredAlbums = discoverAlbums.slice(0, 4);
    const discoverAll = discoverAlbums.slice(4, 9);
    const recentAlbums = discoverAlbums.slice(13);

    if (discoverAlbums.length < 10) return null;

    return (
      <div className='discover-container'>
        <FeaturedAlbums featuredAlbums={ featuredAlbums }/>
        <h2 className='recent-albums-header' >Discover</h2>
        <Browse featuredAlbums={ discoverAll }/>
        <RecentAlbums recentAlbums={ recentAlbums } />
      </div>

    );
  }
}

export default Discover;
