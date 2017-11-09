let nextNoteId = 0

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
