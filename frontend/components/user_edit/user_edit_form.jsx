import React from 'react';

import FontAwesome from 'react-fontawesome';

class UserEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.user.location || '',
      own_site_url: this.props.user.ownSiteUrl || '',
      description: this.props.user.description || '',
      tag: '',
      tag_names: this.props.tagNames || []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
    this.addTag = this.addTag.bind(this);
    this.handleTagFieldKey = this.handleTagFieldKey.bind(this);
    this.removeTag = this.removeTag.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const propicFile = this.props.profileImg;
    const bannerFile = this.props.bannerImg;
    const formData = new FormData();

    Object.keys(this.state).forEach(key => {
      if (key === 'tag') {
        return null;
      } else if (key === 'tag_names') {
        this.state[key].forEach((tag_name) => {
          formData.append(`user[tag_names][]`, tag_name);
        });
      } else {
        formData.append(`user[${key}]`, this.state[key]);
      }
    });

    if (propicFile) formData.append('user[profile_img]', propicFile);
    if (bannerFile) formData.append('user[banner_img]', bannerFile);

    this.props.updateUser(this.props.userId, formData).then(
      this.props.toggleEditForm
    );
  }

  updateField(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
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

  cancelForm() {
    this.props.cancelImageChange(
      this.props.user.profileImgUrl,
      this.props.user.bannerImgUrl
    );
    this.props.toggleEditForm();
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit } className='user-edit-form'>
        <div className='user-edit-input-box'>
          <div className='user-edit-field-container'>
            <label>location</label>
              <input
                onChange={ this.updateField('location')}
                value={ this.state.location }
                type="text"
                className='user-edit-input-field'
              />
          </div>

          <div className='user-edit-field-container'>
            <label>link to your website or blog</label>
              <input
                onChange={ this.updateField('own_site_url')}
                value={ this.state.own_site_url }
                type="text"
                className='user-edit-input-field'
              />
          </div>
        </div>

        <div className='user-edit-textarea-box'>
          <div className='user-edit-field-container'>
            <label>about you</label>
              <textarea
                onChange={ this.updateField('description')}
                value={this.state.description }
              />
          </div>
        </div>

        <div className='user-edit-input-box'>
          <div className='user-edit-field-container'>
            <div className='flx-container tag-labels'>
              <label>tags</label>
              <label
                onClick={ this.addTag }
                className='tag-btn'>
                add tag</label>
            </div>
              <input
                onKeyPress={ this.handleTagFieldKey }
                onChange={ this.updateField('tag')}
                value={ this.state.tag }
                type="text"
                className='user-edit-input-field'
              />
          </div>

          <div>

            <ul className='user-edit-tags'>
              {
                this.state.tag_names.map((tag_name, idx) => {
                  return (
                    <li key={ idx }
                      onClick={ this.removeTag }>
                    { tag_name }</li>
                  );
                })
              }
            </ul>
          </div>
        </div>


        <div className='user-edit-submit-box'>
          <button className='user-edit-submit'
            type="submit"
            >SAVE CHANGES</button>

          <a onClick={ this.cancelForm }>cancel</a>
        </div>
      </form>
    );
  }
}

export default UserEditForm;
