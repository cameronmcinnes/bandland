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

  const background = (album.cover_img_url) ?
  {backgroundImage: `url(${album.cover_img_url})`} : {border: 'grey 1px dotted'};

  const selectedClass = (album.albumSelected) ? '' : 'info-deselected';

  const albumInfo = (
    <div className={ `album-info ${selectedClass}` }
      onClick={ selectAlbum() }>
      <div className='album-create-thumb' style={ background }></div>
      <div>
        <p>{album.title || 'Untitled Album'}</p>
        <p>by <strong>{ artistName }</strong></p>
        <p>$ { album.price || '0'} or more</p>
      </div>
    </div>
  );

  const icon = (album.cover_img_url) ? '' : <FontAwesome name='camera' />;
  if (album.albumSelected) {
    // TODO make classes reusable

    return (
      <div className='album-input-container'>
        { albumInfo }
        <div className='album-create-right-column'>
          <label>album title
            <input
              className='track-input-field'
              type='text'
              onChange={ updateAlbumInputField('title') }
              value={ album.title }>
            </input>
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

          <div className='small-fields-container'>
            <label>genre
              <input
                className='track-input-field'
                type='text'
                onChange={ updateAlbumInputField('genre') }
                value={ album.genre }>

              </input>
            </label>

            <label>price
              <input
                className='track-input-field'
                type='text'
                onChange={ updateAlbumInputField('price') }
                value={ album.price }>

              </input>
            </label>
          </div>

          <label>description
            <textarea
              className='track-input-field'
              onChange={ updateAlbumInputField('description') }
              value={ album.description }>

            </textarea>
          </label>
        </div>
      </div>
    );
  } else {
    return albumInfo;
  }
};

export default AlbumInput;
