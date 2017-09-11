import { h, Component } from 'preact';

import style from '../../styles/login.scss';

export default class Login extends Component {
    render()  {
        return (
            <div class="login">
                <div class="login-main">
                    <img class="login-header" src="../../logo-header.png" alt="Freenote"/>

                    <form class="login-form">
                        <p class="login-message">Sign in with your username and password</p>
                        <div class="login-fieldset">
                            <input class="login-input" placeholder="Username"/>
                            <input class="login-input" type="password" placeholder="Password"/>
                        </div>
                        <div class="login-fieldset">
                            <input class="login-button" type="submit" value="Sign in"/>
                        </div>
                    </form>

                    <div class="login-footer">
                        <p>&copy; 2017 Tatu Arvela</p>
                        <a href="#">Password renewal</a>
                    </div>
                </div>
            </div>
        )
    };
}