import config from '../config'


// RECEIVE

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

        dispatch(_login(json))
      })
  }
}

export const _login = (json) => {
  return {
    type: "LOGIN",
    token: json.token,
    userdata: {
      firstName: json.firstName,
      lastName: json.lastName,
      username: json.username,
      email: json.email,
      admin: json.admin
    }
  }
}
