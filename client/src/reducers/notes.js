const notes = (state = [], action) => {
  switch (action.type) {

    case 'ADD_NOTE':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          text: action.text,
          deleted: false
        }
      ]

    case 'TOGGLE_DELETE':
      return state.map(note =>
        (note.id === action.id) 
          ? {...note, deleted: !note.deleted}
          : note
      )

    case 'CHANGE_TITLE':
      return state.map(note =>
        (note.id === action.id)
          ? {...note, title: action.title}
          : note
      )

    case 'CHANGE_TEXT':
      return state.map(note =>
        (note.id === action.id)
          ? {...note, text: action.text}
          : note
      )

    default:
      return state

  }
}

export default notes
