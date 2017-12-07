import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { 
  login 
} from '../../actions/user'
import PropTypes from 'prop-types'
import './style.scss';

const mapStateToProps = (state) => {
  const token = state.user.token
  return {
    token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

/*
  STATUS
  true: Logging in
  null: Waiting for input
  false: Error
*/


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      status: null
    }

    this.submitLogin = this.submitLogin.bind(this)
  }

  submitLogin(event, username, password) {
    this.setState({
      status: true
    },
    () => {
      this.props.dispatch(login(
        username,
        password,
        (status) => {
          this.setState({
            status: status
          })
        }
      ))
    })

    event.preventDefault()
  }

  render() {
    if (this.props.token) {
      return <Redirect to="/" />;
    }
    else return (
      <div className="login">
        <div className="login-main">
          <img className="login-header" src={require('../../images/logo.png')} alt="Freenote"/>

          <form className="login-form">
            <p className="login-message">Sign in with your username and password</p>
            <div className="login-fieldset">
              <input
                className="login-input"
                type="text"
                placeholder="Username"
                disabled={this.state.status}
                onChange = {(event) => this.setState({
                  username: event.target.value
                })}
              />
              <input
                className="login-input"
                type="password"
                placeholder="Password"
                disabled={this.state.status}
                onChange={(event) => this.setState({
                  password: event.target.value
                })}
              />
            </div>
            <div className="login-fieldset">
              <input
                className="login-button"
                type="submit"
                value={this.state.status ? 'Signing in...' : 'Sign in'}
                disabled={this.state.status === 'LOGGING IN'}
                onClick={(event) => this.submitLogin(
                  event,
                  this.state.username,
                  this.state.password
                )}
              />
            </div>
            {this.state.status === false &&
              <p className="login-message">Wrong username or password</p>
            }
          </form>

          <div className="login-footer">
            <p>&copy; 2017 Tatu Arvela</p>
            {/* <a>Password renewal</a> */}
          </div>
        </div>
      </div>
      )
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)