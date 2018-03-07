import React from 'react';
import { Link } from 'react-router-dom';

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
            className={ this.fieldClassName('email') }
          />
        { this.fieldErrors('email') }
      </div>
    );
  }

  fieldErrors(field) {
    return (
      <div className='session-errors'>
        <ul>
          {
            this.props.errors[field].map((error, idx) => {
              return <li key={ idx }>{error}</li>;
            })
          }
        </ul>
      </div>
    );
  }

  fieldClassName(field) {
    if (this.props.errors[field].length > 0) {
      return 'login-input error-input';
    } else {
      return 'login-input';
    }
  }

  footer() {
    if (this.props.formType === 'Login') {
      return (
        <span>Don't have an account?&nbsp;
          <Link to="/signup">Sign up</Link>
        </span>
      );
    } else {
      return (
        <span>Already have an account?&nbsp;
          <Link to="/login">Log in</Link>
        </span>
      )
    }
  }

  render() {
    const userLabel = ( this.props.formType === 'Signup') ?
      'Username' : 'Username / email';

    const emailInput = ( this.props.formType === 'Signup') ?
      this.emailInput() : '';

    return (
      <div className='session-form-container'>
        <form onSubmit={ this.handleSubmit } className='session-form'>
          <h2>{this.props.formType}</h2>

          <div className='divider'></div>

          { emailInput }

          <div className='session-form-input'>
            <label>{ userLabel }</label>
              <input
                type="text"
                onChange={ this.updateField('username')}
                value={ this.state.username }
                className={ this.fieldClassName('username') }
              />
          </div>

          { this.fieldErrors('username') }

          <div className='session-form-input'>
            <label>Password</label>
              <input
                onChange={ this.updateField('password')}
                value={ this.state.password }
                type='password'
                className={ this.fieldClassName('password') }
              />
          </div>

          { this.fieldErrors('password') }

          <input className="session-submit"
            type="submit"
            value={this.props.formType}
          />

        <footer className="session-form-footer">
          { this.footer() }
        </footer>
        </form>
      </div>
    );
  }
}

export default SessionForm;
