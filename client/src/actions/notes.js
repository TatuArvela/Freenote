import config from '../config'


// RECEIVE

export const requestNotes = () => {
  return {
    type: "REQUEST_NOTES"
  }
}

export const requestSingleNote = () => {
  return {
    type: "REQUEST_SINGLE_NOTE"
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
  return (dispatch, getState) => {
    dispatch(requestNotes())
    return fetch(`${config.server.url}/notes`, {
      headers: {
        'X-Access-Token': getState().user.token
      }
    })
      .then(response => response.json())
      .then(json => actOnResponse(json))
      .then(json => dispatch(receiveNotes(json)))
  }
}

export const fetchSingleNote = (id) => {
  return (dispatch, getState) => {
    dispatch(requestSingleNote())
    return fetch(`${config.server.url}/notes/` + id, {
      headers: {
        'X-Access-Token': getState().user.token
      }
    })
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

export const newNote = () => {
  return (dispatch, getState) => {
    return fetch(`${config.server.url}/notes`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Access-Token': getState().user.token
      }
    })
  }
}


// SEND

export const softDelete = (_id) => {
  return (getState) => {
    return fetch(`${config.server.url}/notes/` + _id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Access-Token': getState().user.token
      }
    })
  }
}

export const changeTitle = (_id, value) => {
  return (getState) => {
    return fetch(`${config.server.url}/notes/` + _id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Access-Token': getState().user.token
      },
      body: JSON.stringify({
        title: value
      })
    })
  }
}

export const changeText = (_id, value) => {
  return (getState) => {
    return fetch(`${config.server.url}/notes/` + _id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Access-Token': getState().user.token
      },
      body: JSON.stringify({
        text: value
      })
    })
  }
}