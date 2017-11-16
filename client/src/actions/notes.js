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
  return dispatch => {
    dispatch(requestNotes())
    return fetch(`http://localhost:4000/notes`)
      .then(response => response.json())
      .then(json => dispatch(receiveNotes(json)))
  }
}

export const shouldFetchNotes = (state) => {
  const notes = state.notes
  if (!notes.lastUpdated) {
    return true
  } else if (notes.isFetching) {
    return false
  } else {
    return false
  }
}

export const fetchNotesIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchNotes(getState())) {
      return dispatch(fetchNotes())
    }
  }
}

export const newNote = () => {
  return (dispatch, getState) => {
    fetch(`http://localhost:4000/notes/new`, {
      method: "POST"
    })
      .then(response => response.json())
      .then(json => dispatch(receiveNotes(json)))
    dispatch(fetchNotes())
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleDelete = id => {
  return {
    type: 'TOGGLE_DELETE',
    id
  }
}

export const changeTitle = (id, value) => {
  return {
    type: 'CHANGE_TITLE',
    id,
    value
  }
}

export const changeText = (id, value) => {
  return {
    type: 'CHANGE_TEXT',
    id,
    value
  }
}
