import React from 'react';
import FontAwesome from 'react-fontawesome';

class TrackInputForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { title: '', ord: this.props.ord };
    // this.updateField = this.updateField.bind(this);
  // }

  // updateField(field) {
    // this.setState({ title: e.target.value });
    // this.props.onTitleChange(e.target.value, this.props.ord);
    // this.props.updateTrackInputField(field, e.target.value, this.props.ord);
  // }

  render() {
    const { track } = this.props;
    const title = this.props.title;

    if (track.selected) {
      return (
        <div className='hey-wiseguy'>
          <div className='track-info'>
            <FontAwesome name='bars'/>
            <p><strong>{this.props.ord + 1}</strong>{ track.title }</p>
            <FontAwesome name='times'
              onClick={ this.props.deleteTrackInput(this.props.ord) }/>
          </div>

          <div className='right-column'>
            <div className='track-input'>
              <label>title
                <input
                  type='text'
                  value={ this.props.title }
                  onChange={ this.props.updateTrackInputField('title', this.props.ord) }
                  ></input>
              </label>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='track-info'
          onClick={ this.props.selectTrack(this.props.ord) }>
          <FontAwesome name='bars'/>
          <p><strong>{this.props.ord + 1}</strong>{ track.title }</p>
          <FontAwesome name='times'
            onClick={ this.props.deleteTrackInput(this.props.ord) }/>
        </div>
      );
    }
  }
}

export default TrackInputForm;
