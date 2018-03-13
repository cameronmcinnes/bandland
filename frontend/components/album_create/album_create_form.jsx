import React from 'react';

import AlbumInput from './album_input';
import TrackInput from './track_input';

class AlbumCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      price: '',
      genre: '',
      track_attributes: [],
      albumSelected: true,
    };
    // concerned w track input
    this.updateTrackInputField = this.updateTrackInputField.bind(this);
    this.selectTrack = this.selectTrack.bind(this);
    this.deleteTrackInput = this.deleteTrackInput.bind(this);
    // concerned w album input
    this.updateAlbumInputField = this.updateAlbumInputField.bind(this);
    this.selectAlbum = this.selectAlbum.bind(this);
    // concerned w top level form
    this.appendTrackInput = this.appendTrackInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  updateAlbumInputField(field) {
    return (e) => {
      if (e.target.type === 'file') {
        this.handleImageChange(e);
      } else {
        this.setState({ [field]: e.target.value });
      }
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
      // to account for when track is deleted
      if (!this.state.tracks[ord]) return null;
      const newTrackArr = this._returnDeselectedTracks();
      newTrackArr[ord].selected = true;
      this.setState({ tracks: newTrackArr, albumSelected: false });
    };
  }

  selectAlbum() {
    return (e) => {
      this.setState({ albumSelected: true,
        tracks: this._returnDeselectedTracks()
      });
    };
  }

  deleteTrackInput(ord) {
    return (e) => {
      e.stopPropagation();
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
    this.setState({ tracks: newTrackArr.concat([newTrack]),
      albumSelected: false
    });
  }


  render() {
    return(
      <div className='album-create-container'>
        <form className='user-edit-form'>
          <ul>
            <AlbumInput
              album={ this.state }
              updateAlbumInputField={ this.updateAlbumInputField }
              selectAlbum={ this.selectAlbum }
              artistName={ this.props.artistName }
              handleImageChange={ this.handleImageChange }
              />
            {
              this.state.tracks.map((track, idx) => (
                <TrackInput
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

          <button type='submit'>
            SAVE ALBUM
          </button>
        </form>
      </div>
    );
  }
}

export default AlbumCreateForm;
