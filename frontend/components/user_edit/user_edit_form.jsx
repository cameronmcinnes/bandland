import React from 'react';

import FontAwesome from 'react-fontawesome';

class UserEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.user.location || '',
      own_site_url: this.props.user.ownSiteUrl || '',
      description: this.props.user.description || ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const propicFile = this.props.profileImg;
    const bannerFile = this.props.bannerImg;
    const formData = new FormData();

    Object.keys(this.state).forEach(key => {
      formData.append(`user[${key}]`, this.state[key]);
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
