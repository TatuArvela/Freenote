import config from '../config'
const serverUrl = 'http://' + config.server.ip + ":" + config.server.port

// TRANSPORT

export const requestNotes = () => {
  return {
    type: "REQUEST_NOTES",
  }
}

export const requestSingleNote = () => {
  return {
    type: "REQUEST_SINGLE_NOTE",
  }
}

export const receiveNotes = (json) => {
  return {
    type: "RECEIVE_NOTES",
    items: json,
    receivedAt: Date.now()
  }
}

export const receiveSingleNote = (json) => {
  return {
    type: "RECEIVE_SINGLE_NOTE",
    item: json,
    receivedAt: Date.now()
  }
}

export const fetchNotes = () => {
  return (dispatch) => {
    console.log("fetchNotes")
    dispatch(requestNotes())
    return fetch(`${serverUrl}/notes`)
      .then(response => response.json())
      .then(json => actOnResponse(json))
      .then(json => dispatch(receiveNotes(json)))
  }
}

export const fetchSingleNote = (id) => {
  return (dispatch) => {
    dispatch(requestSingleNote())
    return fetch(`${serverUrl}/notes/` + id)
      .then(response => response.json())
      .then(json => actOnResponse(json))
      .then(json => dispatch(receiveSingleNote(json)))
  }
}

const actOnResponse = (json) => {
  // If receiving something other than notes, drop everything
  if (json.success !== undefined)
    // Should then redirect to login
    return []
  else
    return json
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

export const softDelete = (_id) => {
  fetch(`${serverUrl}/notes/` + _id, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
}

export const changeTitle = (_id, value) => {
  fetch(`${serverUrl}/notes/` + _id, {
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

export const changeText = (_id, value) => {
  fetch(`${serverUrl}/notes/` + _id, {
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
