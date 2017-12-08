import Cookies from 'js-cookie'
import config from '../config'

export const login = (username, password, returnStatus) => {
  return (dispatch) => {
    return fetch(`${config.server.url}/authenticate`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.success === true) {
          returnStatus(null)
        }
        else {
          returnStatus(false)
        }

        Cookies.set(
          'freenote-token',
          json,
          { expires: json.expires }
        )
        dispatch(_login(json))
      })
  }
}

export const readCookie = () => {
  return (dispatch) => {
    var _cookie = Cookies.get('freenote-token')
    if (_cookie !== undefined) {
      var cookie = JSON.parse(_cookie)
      if (cookie.token) {
        dispatch(_login(cookie))
      }
    }
    else {
      dispatch(_ready())
    }
  }
}

const _ready = () => {
  return {
    type: "READY"
  }
}

const _login = (data) => {
  return {
    type: "LOGIN",
    token: data.token,
    expires: data.expires,
    userdata: {
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      email: data.email,
      admin: data.admin
    }
  }
}

// TODO: This function should also notify the server to drop the user token
export const logout = () => {
  alert("You have been logged out.")
  Cookies.remove('freenote-token')
  return {
    type: "LOGOUT"
  }
}
