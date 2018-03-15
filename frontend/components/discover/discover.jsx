import React from 'react';

import FeaturedAlbums from './featured_albums';

class Discover extends React.Component {
  componentDidMount() {
    this.props.fetchRecentAlbums(15);
  }

  render() {
    const { discoverAlbums } = this.props;
    const featuredAlbums = discoverAlbums.slice(2);
    const recentAlbums = discoverAlbums.slice(3, discoverAlbums.length);

    return (
      <div className='discover-container'>
        <FeaturedAlbums featuredAlbums={ featuredAlbums }/>

        <RecentAlbums recentAlbums={ recentAlbums } />
      </div>

    );
  }
}

export default Discover;
