import config from '../config'
import { logout } from './user'


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

function handleErrors(response, dispatch) {
  if (!response.ok) {
    dispatch(logout())
    throw Error(response.statusText)
  }
  return response
}

export const fetchNotes = () => {
  return (dispatch, getState) => {
    dispatch(requestNotes())
    return fetch(`${config.server.url}/notes`, {
      headers: {
        'X-Access-Token': getState().user.token
      }
    })
      .then(response => handleErrors(response, dispatch))
      .then(response => response.json())
      .then(json => dispatch(receiveNotes(json)))
      .catch(function(error) {
        console.log(error);
      });
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
      .then(response => handleErrors(response, dispatch))
      .then(response => response.json())
      .then(json => dispatch(receiveSingleNote(json)))
      .catch(function(error) {
        console.log(error);
      });
  }
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
    .then(response => handleErrors(response, dispatch))
    .catch(function(error) {
      console.log(error);
    });
  }
}


// SEND

export const softDelete = (_id) => {
  return (dispatch, getState) => {
    return fetch(`${config.server.url}/notes/` + _id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Access-Token': getState().user.token
      }
    })
    .then(response => handleErrors(response, dispatch))
    .catch(function(error) {
      console.log(error);
    });
  }
}

export const changeTitle = (_id, value) => {
  return (dispatch, getState) => {
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
    .then(response => handleErrors(response, dispatch))
    .catch(function(error) {
      console.log(error);
    });
  }
}

export const changeText = (_id, value) => {
  return (dispatch, getState) => {
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
    .then(response => handleErrors(response, dispatch))
    .catch(function(error) {
      console.log(error);
    });
  }
}