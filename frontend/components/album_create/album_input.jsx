import React from 'react';
import FontAwesome from 'react-fontawesome';

const AlbumInput = (props) => {
  const {
    album,
    updateAlbumInputField,
    selectAlbum,
    artistName,
    handleImageChange,
    errors,
    errorsPresent,
    newTag,
    tagNames,
    addTag,
    removeTag,
    handleTagFieldKey
  } = props;

  const fieldErrors = (field) => {
    return (
      <div className='album-errors'>
        <ul>
          {
            errors[field].map((error, idx) => {
              return <li key={ idx }>{error}</li>;
            })
          }
        </ul>
      </div>
    );
  };

  const fieldErrorClass = (field) => {
    if (errors[field].length > 0) {
      return 'error-input';
    } else {
      return '';
    }
  };

  const background = (album.cover_img_url) ?
  {backgroundImage: `url(${album.cover_img_url})`} : {border: 'grey 1px dotted'};

  const selectedClass = (album.albumSelected) ? '' : 'info-deselected';

  const errorClass = (errorsPresent) ? 'error-info' : '';

  const albumInfo = (
    <div className={ `album-info ${selectedClass} ${errorClass} ` }
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
              className={ `track-input-field ${fieldErrorClass('title')}`}
              type='text'
              onChange={ updateAlbumInputField('title') }
              value={ album.title }>
            </input>
          </label>

          { fieldErrors('title') }

          <label
            className={ `album-cover-file-input ${fieldErrorClass('cover_img')}`}
            style={ background }
            >
            { icon }
            <input className='file-input'
              type='file'
              onChange={ updateAlbumInputField() }
              ></input>
          </label>

          { fieldErrors('cover_img') }

          <div className='small-fields-container'>
            <label>genre
              <input
                className='track-input-field'
                type='text'
                onChange={ updateAlbumInputField('genre') }
                value={ album.genre }>

              </input>
            </label>

            <div className='album-price-and-errors'>
              <label>price
                <input
                  className={ `track-input-field ${fieldErrorClass('price')}`}
                  type='text'
                  onChange={ updateAlbumInputField('price') }
                  value={ album.price }>

                </input>
              </label>
              { fieldErrors('price') }
            </div>
          </div>

          <label>description
            <textarea
              className='track-input-field'
              onChange={ updateAlbumInputField('description') }
              value={ album.description }>

            </textarea>
          </label>

          <div className='user-edit-input-box'>
            <div className='user-edit-field-container album-create-tag-input'>
              <div className='flx-container tag-labels'>
                <label id='alb-tag-label'>tags</label>
                <label
                  onClick={ addTag }
                  className='tag-btn'>
                  add tag</label>
              </div>
                <input
                  onKeyPress={ handleTagFieldKey }
                  onChange={ updateAlbumInputField('tag')}
                  value={ newTag }
                  type="text"
                  className='track-input-field'
                />
            </div>

            <div>

              <ul className='user-edit-tags album-create-tags'>
                {
                  tagNames.map((tag_name, idx) => {
                    return (
                      <li key={ idx }
                        onClick={ removeTag }>
                      { tag_name }</li>
                    );
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return albumInfo;
  }
};

export default AlbumInput;
