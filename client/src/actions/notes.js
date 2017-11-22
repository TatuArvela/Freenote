import config from '../config'
const serverUrl = 'http://' + config.server.ip + ":" + config.server.port

// TRANSPORT

export const requestNotes = () => {
  return {
    type: "REQUEST_NOTES",
  }
}

export const receiveNotes = (json) => {
  return {
    type: "RECEIVE_NOTES",
    items: json,
    receivedAt: Date.now()
  }
}

export const fetchNotes = () => {
  return (dispatch) => {
    console.log("fetchNotes")
    dispatch(requestNotes())
    return fetch(`${serverUrl}/notes`)
      .then(response => response.json())
      .then(json => dispatch(receiveNotes(json)))
  }
}



// ACTIONS

export const newNote = () => {
  fetch(`${serverUrl}/notes`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
}

export const softDelete = (id) => {
  fetch(`${serverUrl}/notes/` + id, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
}

export const changeTitle = (id, value) => {
  fetch(`${serverUrl}/notes/` + id, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: value
    })
  })
}

export const changeText = (id, value) => {
  fetch(`${serverUrl}/notes/` + id, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: value
    })
  })
}
