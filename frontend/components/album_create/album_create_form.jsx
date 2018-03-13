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
      tracks:[]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.appendTrackInput = this.appendTrackInput.bind(this);
    this.selectTrack = this.selectTrack.bind(this);
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

  selectTrack(e) {

  }

  appendTrackInput() {
    const newTrack = { title: '' };
    this.setState({ tracks: this.state.tracks.concat([newTrack]) });
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

            <ul onClick={ this.selectTrack }>
              {
                this.state.tracks.map((track, idx) => (
                  <TrackInputForm key={ idx } ord={ idx } track={ track } selected={ true }/>
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
