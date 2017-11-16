import React from 'react';
import './style.scss';

const Login = () => (
  <div className="login">
    <div className="login-main">
      <img className="login-header" src={require('../../images/logo.png')} alt="Freenote"/>

      <form className="login-form">
        <p className="login-message">Sign in with your username and password</p>
        <div className="login-fieldset">
          <input className="login-input" placeholder="Username"/>
          <input className="login-input" type="password" placeholder="Password"/>
        </div>
        <div className="login-fieldset">
          <input className="login-button" type="submit" value="Sign in"/>
        </div>
      </form>

      <div className="login-footer">
        <p>&copy; 2017 Tatu Arvela</p>
        <a>Password renewal</a>
      </div>
    </div>
  </div>
)

export default Login