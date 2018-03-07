import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
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
      <div className='session-form-input'>
        <label>Email</label>
          <input
            onChange={ this.updateField('email')}
            value={ this.state.email }
            className='login-input'
          />
      </div>
    );
  }

  render() {
    const emailInput = ( this.props.formType === 'Signup') ?
      this.emailInput() : '';

    const userLabel = ( this.props.formType === 'Signup') ?
      'Username' : 'Username / email';

    let userFieldClass = 'login-input';
    let passwordFieldClass = 'login-input';
    if (this.props.errors[0]) {
      if (this.props.errors[0][0] === 'P') {
        passwordFieldClass += ' error-input';
      } else if (this.props.errors[0][0] === 'U') {
        userFieldClass += ' error-input';
      }
    }

    return (
      <div className='session-form-container'>
        <form onSubmit={ this.handleSubmit } className='session-form-box'>
          <div className='session-form'>
            <h2>{this.props.formType}</h2>
            <div className='divider'></div>

            { emailInput }

            <div className='session-form-input'>
              <label>{ userLabel }</label>
                <input
                  onChange={ this.updateField('username')}
                  value={ this.state.username }
                  className={ userFieldClass }
                />
            </div>

            <div className='session-form-input'>
              <label>Password</label>
                <input
                  onChange={ this.updateField('password')}
                  value={ this.state.password }
                  type='password'
                  className={ passwordFieldClass }
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

            <input className="session-submit"
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
