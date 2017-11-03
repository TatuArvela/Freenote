let nextNoteId = 0

export const addNote = text => {
  return {
    type: 'ADD_NOTE',
    id: nextNoteId++,
    text
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

export const changeText = (id, value) => {
  return {
    type: 'CHANGE_TEXT',
    id,
    value
  }
}
