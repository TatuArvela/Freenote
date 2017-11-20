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
    return fetch(`http://localhost:4000/notes`)
      .then(response => response.json())
      .then(json => dispatch(receiveNotes(json)))
  }
}



// ACTIONS

export const newNote = () => {
  fetch(`http://localhost:4000/notes`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
}

export const softDelete = (id) => {
  fetch(`http://localhost:4000/notes/` + id, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
}

export const changeTitle = (id, value) => {
  fetch(`http://localhost:4000/notes/` + id, {
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
  fetch(`http://localhost:4000/notes/` + id, {
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
