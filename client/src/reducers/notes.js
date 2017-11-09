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
      console.log(action)
      return state.map(note =>
        (note.id === action.id)
          ? {...note, title: action.value}
          : note
      )

    case 'CHANGE_TEXT':
      console.log(action)
      return state.map(note =>
        (note.id === action.id)
          ? {...note, text: action.value}
          : note
      )

    default:
      return state

  }
}

export default notes
