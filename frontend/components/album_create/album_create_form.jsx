import React from 'react';
import { Link } from 'react-router-dom';

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
      tag_names: [],
      tag: '',
      albumSelected: true,
      albumErrors: this.props.albumErrors
    };
    // concerned w track input
    this.updateTrackInputField = this.updateTrackInputField.bind(this);
    this.selectTrack = this.selectTrack.bind(this);
    this.deleteTrackInput = this.deleteTrackInput.bind(this);
    // concerned w album input
    this.updateAlbumInputField = this.updateAlbumInputField.bind(this);
    this.selectAlbum = this.selectAlbum.bind(this);
      // concerned w tags
    this.handleTagFieldKey = this.handleTagFieldKey.bind(this);
    this.addTag = this.addTag.bind(this);
    this.removeTag = this.removeTag.bind(this);
    // concerned w top level form
    this.appendTrackInput = this.appendTrackInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ albumErrors: nextProps.albumErrors });
  }

  albumErrorsPresent(nextProps, field) {
    if (field &&
      nextProps.albumErrors[field] &&
      nextProps.albumErrors[field].length === 0) {
      return false;
    }
    const errorFields = Object.values(nextProps.albumErrors);
    for (let i = 0; i < errorFields.length; i++) {
      if (errorFields[i].length > 0) {
        return true;
      }
    }
    return false;
  }

  handleSubmit(e) {
    e.preventDefault();
    const coverImg = this.state.coverImg;
    const formData = new FormData();

    Object.keys(this.state).forEach(key => {
      if (key === 'albumSelected' || key === 'track_attributes') {
        return null;
      }
      else if (key === 'tag_names') {
        this.state[key].forEach((tag_name) => {
          formData.append('tags[tag_names][]', tag_name);
        });
      } else {
        formData.append(`album[${key}]`, this.state[key]);
      }
    });

    this.state.track_attributes.forEach((track, idx) => {
      formData.append('album[tracks_attributes][][title]', track.title);
      formData.append('album[tracks_attributes][][ord]', idx);
      formData.append('album[tracks_attributes][][audio_file]', track.audio_file);
    });

    if (coverImg) formData.append('album[cover_img]', coverImg);

    this.props.startUploadingAlbum();
    this.props.createAlbum(formData, this.props.userId).then((res) => {
      this.props.history.push(`/albums/${res.album.id}`);
    });
  }

  updateAlbumInputField(field) {
    return (e) => {
      if (this.albumErrorsPresent(this.props, field)) {
        this.props.clearAlbumErrors(field);
      }

      if (e.target.type === 'file') {
        this.handleImageChange(e);
      } else {
        this.setState({ [field]: e.target.value });
      }
    };
  }

  updateTrackInputField(field, ord) {
    return (e) => {
      const newTrackArr = Object.assign(this.state.track_attributes);
      newTrackArr[ord][field] = e.target.value;
      this.setState({ track_attributes: newTrackArr });
    };
  }

  selectTrack(ord) {
    return (e) => {
      // to account for when track is deleted
      if (!this.state.track_attributes[ord]) return null;
      const newTrackArr = this._returnDeselectedTracks();
      newTrackArr[ord].selected = true;
      this.setState({ track_attributes: newTrackArr, albumSelected: false });
    };
  }

  selectAlbum() {
    return (e) => {
      this.setState({ albumSelected: true,
        track_attributes: this._returnDeselectedTracks()
      });
    };
  }

  deleteTrackInput(ord) {
    return (e) => {
      e.stopPropagation();
      const newTrackArr = this.state.track_attributes;
      newTrackArr.splice(ord, 1);
      this.setState({ track: newTrackArr });
    };
  }

  _returnDeselectedTracks() {
    const newTrackArr = Object.assign(this.state.track_attributes);
    return newTrackArr.map((track) => {
      track.selected = false;
      return track;
    });
  }

  handleImageChange(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
    this.setState({ cover_img_url: reader.result, cover_img: file});

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ cover_img_url: "", cover_img: null });
    }
  }

  appendTrackInput(e) {
    const newTrackArr = this._returnDeselectedTracks();
    const newTrack = {
      title: '',
      selected: true,
      audio_file: e.currentTarget.files[0]
    };

    this.setState({ track_attributes: newTrackArr.concat([newTrack]),
      albumSelected: false
    });
  }

  addTag(e) {
    e.preventDefault();
    if ( this.state.tag === '') return null;
    this.setState({
      tag_names: this.state.tag_names.concat(this.state.tag),
      tag: ''
    });
  }

  removeTag(e) {
    const newTagNames = this.state.tag_names.filter((tag_name) => {
      return tag_name !== e.target.innerText;
    });
    this.setState({ tag_names: newTagNames });
  }

  handleTagFieldKey(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.addTag(e);
    }
  }
  // spread props for album input TODO
  renderForm() {
    return (
      <ul>
        <AlbumInput
          album={ this.state }
          updateAlbumInputField={ this.updateAlbumInputField }
          selectAlbum={ this.selectAlbum }
          artistName={ this.props.artistName }
          handleImageChange={ this.handleImageChange }
          errors={ this.state.albumErrors }
          errorsPresent= { this.albumErrorsPresent(this.props) }
          newTag={ this.state.tag }
          tagNames={ this.state.tag_names }
          removeTag={ this.removeTag }
          addTag={ this.addTag }
          handleTagFieldKey={ this.handleTagFieldKey }
          />
        <span>TRACKS</span>
        {
          this.state.track_attributes.map((track, idx) => (
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
    );
  }

  renderButtons() {
    return (
      <div className='buttons-container'>
        <label className='hollow-btn'> ADD TRACK
          <input className='file-input'
            type='file'
            onChange={ this.appendTrackInput }
            accept='audio/*'
            ></input>
        </label>

        <button className='hollow-btn'
          type='submit' onClick={ this.handleSubmit }>
          SAVE ALBUM
        </button>

        <Link to={ `/users/${this.props.userId}` }>or cancel</Link>
      </div>
    );
  }

  renderLoader() {
    return (
      <div className='album-upload-loader-container'>
        <div className='loader'>Loading</div>
      </div>
    );
  }

  render() {
    return(
      <div className='album-create-background'>
        <div className='album-create-container'>
          <form className='album-form'>

            { this.props.loading && this.renderLoader() }
            { !this.props.loading && this.renderForm() }
            { !this.props.loading && this.renderButtons() }

          </form>
        </div>
      </div>
    );
  }
}

export default AlbumCreateForm;
