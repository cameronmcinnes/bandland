import React from 'react';
import FontAwesome from 'react-fontawesome';

import TrackInputForm from './track_input_form';

class AlbumCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      price: '',
      genre: '',
      tracks: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.appendTrackInput = this.appendTrackInput.bind(this);
    this.selectTrack = this.selectTrack.bind(this);
    this.updateTrackInputField = this.updateTrackInputField.bind(this);
    this.selectTrack = this.selectTrack.bind(this);
    this.deleteTrackInput = this.deleteTrackInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const coverImg = this.state.coverImg;
    const formData = new FormData();

    Object.keys(this.state).forEach(key => {
      formData.append(`album[${key}]`, this.state[key]);
    });

    if (coverImg) formData.append('album[cover_img]', coverImg);

    this.props.updateUser(this.props.userId, formData).then(
      this.props.toggleEditForm
    );
  }

  updateField(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  updateTrackInputField(field, ord) {
    return (e) => {
      const newTrackArr = Object.assign(this.state.tracks);
      newTrackArr[ord][field] = e.target.value;
      this.setState({ tracks: newTrackArr });
    };
  }

  selectTrack(ord) {
    return (e) => {
      if (this.state.tracks[ord].selected) return null;
      const newTrackArr = this._returnDeselectedTracks();
      newTrackArr[ord].selected = true;
      this.setState({ tracks: newTrackArr });
    };
  }

  deleteTrackInput(ord) {
    return (e) => {
      const newTrackArr = this.state.tracks;
      newTrackArr.splice(ord, 1);
      this.setState({ track: newTrackArr });
    };
  }

  _returnDeselectedTracks() {
    const newTrackArr = Object.assign(this.state.tracks);
    return newTrackArr.map((track) => {
      track.selected = false;
      return track;
    });
  }

  // _onTitleChange(title, ord) {
  //   const newTrackArr = Object.assign(this.state.tracks);
  //   newTrackArr[ord].title = title;
  //   this.setState({ tracks: newTrackArr });
  // }
  // _first_onTitleChange(title) {
  //   this.setState({ title });
  // }

  handleImageChange(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ coverImgUrl: reader.result, coverImg: file});

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ coverImgUrl: "", coverImg: null });
    }
  }

  appendTrackInput() {
    const newTrackArr = this._returnDeselectedTracks();
    const newTrack = { title: '', selected: true };
    this.setState({ tracks: newTrackArr.concat([newTrack]) });
  }


  render() {
    const background = (this.state.coverImgUrl) ?
     {backgroundImage: `url(${this.state.coverImgUrl})`} : {};

    const icon = (this.state.coverImgUrl) ? '' : <FontAwesome name='camera' />;

    return(
      <div className='album-create-container'>
        <form className='user-edit-form'>
          <div className='user-edit-field-container'>
            <label>title
              <input
                className='user-edit-input-field'
                type='text'
                onChange={ this.updateField('title') }
                value={ this.state.title }>
              </input>
            </label>

            <label>genre
              <input
                className='user-edit-input-field'
                type='text'
                onChange={ this.updateField('genre') }
                value={ this.state.genre }>

              </input>
            </label>

            <label>price
              <input
                className='user-edit-input-field'
                type='text'
                onChange={ this.updateField('price') }
                value={ this.state.price }>

              </input>
            </label>

            <label>description
              <textarea
                className='user-edit-input-field'
                onChange={ this.updateField('description') }
                value={ this.state.description }>

              </textarea>
            </label>

            <label className='album-cover-file-input'
              style={ background }
              >
              { icon }
              <input className='file-input'
                type='file'
                onChange={ this.handleImageChange }
                ></input>
            </label>

            <ul>
              {
                this.state.tracks.map((track, idx) => (
                  <TrackInputForm
                    key={ idx }
                    ord={ idx }
                    track={ track }
                    updateTrackInputField={ this.updateTrackInputField }
                    selectTrack={ this.selectTrack }
                    deleteTrackInput={ this.deleteTrackInput }
                    />
                ))
              }
            </ul>

            <button onClick={ this.appendTrackInput }>
              ADD TRACK
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AlbumCreateForm;
