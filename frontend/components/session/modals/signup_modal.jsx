import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      // do i need to change backend to accept email??
      email: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
  }

  updateField(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  emailInput() {
    return (
      <div className='session-modal-form-input-box'>
        <label>Email</label>
          <input
            onChange={ this.updateField('email')}
            value={ this.state.email }
            className='session-input'
          />
      </div>
    );
  }

  render() {
    const emailInput = ( this.props.formType === 'Signup') ?
      this.emailInput() : '';

    return (
      <div className='session-modal-form-container'>
        <form onSubmit={ this.handleSubmit } className='session-modal-form-box'>
          <div className='session-modal-form'>

            { emailInput }

            <div className='session-modal-form-input-box'>
              <label>Username</label>
                <input
                  onChange={ this.updateField('username')}
                  value={ this.state.username }
                  className='session-input'
                />
            </div>

            <div className='session-modal-form-input-box'>
              <label>Password</label>
                <input
                  onChange={ this.updateField('password')}
                  value={ this.state.password }
                  type='password'
                  className='session-input'
                />
            </div>

            <div className='session-errors'>
              <ul>
                {
                  this.props.errors.map((error, idx) => {
                    return <li key={ idx }>{error}</li>;
                  })
                }
              </ul>
            </div>

            <input className="session-modal-submit"
              type="submit"
              value={this.props.formType}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
