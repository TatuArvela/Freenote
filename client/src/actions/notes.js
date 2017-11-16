let nextNoteId = 0

function requestNotes() {
  return {
    type: "REQUEST_POSTS",
  }
}

export const receiveNotes = (json) => {
  return {
    type: "RECEIVE_NOTES",
    posts: json,
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
  if (!notes) {
    return true
  } else if (notes.isFetching) {
    return false
  } else {
    return true
  }
}

export const fetchNotesIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchNotes(getState())) {
      return dispatch(fetchNotes())
    }
  }
}

export const addNote = (title, text) => {
  return {
    type: 'ADD_NOTE',
    id: nextNoteId++,
    title: (title != null) ? title : "",
    text: (text != null) ? text : ""
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
