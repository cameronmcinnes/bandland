import React from 'react';
import FontAwesome from 'react-fontawesome';

const AlbumInput = (props) => {
  const {
    album,
    updateAlbumInputField,
    selectAlbum,
    artistName,
    handleImageChange
  } = props;

  const albumInfo = (
    <div className='album-info'
        onClick={ selectAlbum() }>
        <img></img>
        <p>
          <span>{album.title}</span>
          <span>by { artistName }</span>
          <span>${album.price} or more</span>
        </p>
    </div>
  );

  const background = (album.cover_img_url) ?
   {backgroundImage: `url(${album.cover_img_url})`} : {};

  const icon = (album.cover_img_url) ? '' : <FontAwesome name='camera' />;
  if (album.albumSelected) {
    return (
      <div className='user-edit-field-container'>

        { albumInfo }

        <label>title
          <input
            className='user-edit-input-field'
            type='text'
            onChange={ updateAlbumInputField('title') }
            value={ album.title }>
          </input>
        </label>

        <label>genre
          <input
            className='user-edit-input-field'
            type='text'
            onChange={ updateAlbumInputField('genre') }
            value={ album.genre }>

          </input>
        </label>

        <label>price
          <input
            className='user-edit-input-field'
            type='text'
            onChange={ updateAlbumInputField('price') }
            value={ album.price }>

          </input>
        </label>

        <label>description
          <textarea
            className='user-edit-input-field'
            onChange={ updateAlbumInputField('description') }
            value={ album.description }>

          </textarea>
        </label>

        <label className='album-cover-file-input'
          style={ background }
          >
          { icon }
          <input className='file-input'
            type='file'
            onChange={ updateAlbumInputField() }
            ></input>
        </label>
      </div>
    );
  } else {
    return albumInfo;
  }
};

export default AlbumInput;
