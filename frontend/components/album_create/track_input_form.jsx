import React from 'react';
import FontAwesome from 'react-fontawesome';

class TrackInputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', ord: this.props.ord };
    this.updateTitle = this.updateTitle.bind(this);
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    const { track } = this.props;

    if (this.props.selected) {
      return (
        <div className='hey-wiseguy'>
          <div className='track-info'>
            <FontAwesome name='bars'/>
            <p><strong>{track.ord}</strong>{ track.title }</p>
            <FontAwesome name='times'/>
          </div>

          <div className='right-column'>
            <div className='track-input'>
              <label>title
                <input
                  type='text'
                  value={ this.state.title }
                  onChange={ this.updateTitle }
                  ></input>
              </label>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='track-info'>
          <FontAwesome name='bars'/>
          <p><strong>{track.ord}</strong>{ track.title }</p>
          <FontAwesome name='times'/>
        </div>
      );
    }
  }
}

export default TrackInputForm;
