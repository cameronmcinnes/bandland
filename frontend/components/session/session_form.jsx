import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      disabled: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearSessionErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.setState({ disabled: true });
    this.props.processForm({user});//.then(()=> {
    //   this.props.history.push(`users/${this.props.currentUser.id}`)
    // });
  }

  updateField(field) {
    return (e) => {
      this.props.clearSessionErrors();
      this.setState({ disabled: false });
      this.setState({ [field]: e.target.value });
    };
  }

  emailInput() {
    return (
      <div className={`${this.props.modal}session-form-input`}>
        <label>Email</label>
          <input
            onChange={ this.updateField('email')}
            value={ this.state.email }
            type='text'
            className={ this.fieldClassName('email') }
          />
        { this.fieldErrors('email') }
      </div>
    );
  }

  fieldClassName(field) {
    if (this.props.errors[field].length > 0) {
      return `${this.props.modal}session-input error-input`;
    } else {
      return `${this.props.modal}session-input`;
    }
  }

  fieldErrors(field) {
    return (
      <div className={ `${this.props.modal}session-errors` }>
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

  errorsPresent() {
    const errorFields = Object.values(this.props.errors);
    for (let i = 0; i < errorFields.length; i++) {
      if (errorFields[i].length > 0) {
        return true;
      }
    }
    return false;
  }

  footer() {
    if (this.props.formType === 'Login') {
      return (
        <span>Don't have an account?&nbsp;
          { this.otherFormLink('Sign up', 'signup') }
        </span>
      );
    } else {
      return (
        <span>Already have an account?&nbsp;
          { this.otherFormLink('Log in', 'login') }
        </span>
      );
    }
  }

  otherFormLink(linkText, formType) {
    if (this.props.modal === '') {
      return <Link to={`/${formType}`}>{ linkText }</Link>;
    } else {
      return <a onClick={ () => this.props.toggleModal(this.props.otherModal) }>
        { linkText }
      </a>;
    }
  }

  nonModalHeader() {
    const formTitle = (this.props.formType === 'Login') ?
      'Log in' : 'Sign up';
    return (
      <div>
        <h2>{ formTitle }</h2>
        <div className='divider'></div>
      </div>
    );
  }

  render() {
    const modal = this.props.modal;

    const nonModalHeader = ( modal === '' ) ?
      this.nonModalHeader() : '';

    const userLabel = ( this.props.formType === 'Signup') ?
      'Username' : 'Username / email';

    const emailInput = ( this.props.formType === 'Signup') ?
      this.emailInput() : '';

    const buttonDisabled = ( this.errorsPresent() || this.state.disabled );

    return (
      <div className={`${modal}session-form-container`}>
        <form onSubmit={ this.handleSubmit } className={`${modal}session-form`}>

          { nonModalHeader }

          { emailInput }

          <div className={`${modal}session-form-input`}>
            <label>{ userLabel }</label>
              <input
                onChange={ this.updateField('username')}
                value={ this.state.username }
                type="text"
                className={ this.fieldClassName('username') }
              />
          </div>

          { this.fieldErrors('username') }

          <div className={`${modal}session-form-input`}>
            <label>Password</label>
              <input
                onChange={ this.updateField('password')}
                value={ this.state.password }
                type='password'
                className={ this.fieldClassName('password') }
              />
          </div>

          { this.fieldErrors('password') }

          <input className={`${modal}session-submit`}
            type="submit"
            value={this.props.formType}
            disabled={ buttonDisabled }
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
