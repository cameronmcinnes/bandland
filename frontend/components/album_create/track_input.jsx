import React from 'react';
import FontAwesome from 'react-fontawesome';

class TrackInput extends React.Component {
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
        <div className='album-input-container'>
          <div className='track-info'>
            <div>
              <FontAwesome name='bars'/>
              <p><strong>{this.props.ord + 1}</strong>{ track.title }</p>
            </div>
            <FontAwesome name='times'
              onClick={ this.props.deleteTrackInput(this.props.ord) }/>
          </div>

          <div className='album-create-right-column'>
            <div className='track-input'>
              <label>track title
                <input
                  className='track-input-field'
                  onKeyPress={e => {
                    if (e.key === 'Enter') e.preventDefault();
                  }}
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
        <div className='track-info info-deselected'
          onClick={ this.props.selectTrack(this.props.ord) }>
          <div>
            <FontAwesome name='bars'/>
            <p><strong>{this.props.ord + 1}</strong>{ track.title || 'untitled' }</p>
          </div>
          <FontAwesome name='times'
            onClick={ this.props.deleteTrackInput(this.props.ord) }/>
        </div>
      );
    }
  }
}

export default TrackInput;
