import React from 'react';

class BrowseResults extends React.Component {
  componentDidMount() {
    this.props.fetchAlbumsByTag(this.props.tagName);
  }

  render() {
    debugger;
    return (
      <div>RESULTS</div>
    );
  }
}

export default BrowseResults;
