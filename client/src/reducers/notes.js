const notes = (
  state = {
    isFetching: false,
    items: []
  },
  action
) => {
  switch (action.type) {
    case 'REQUEST_NOTES':
      return Object.assign({}, state, {
        isFetching: true
      })

    case 'RECEIVE_NOTES':
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })

    case 'ADD_NOTE':
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: action.id,
            title: action.title,
            text: action.text,
            deleted: false
          }
        ]
      }

    case 'TOGGLE_DELETE':
      return state.items.map(note =>
        (note.id === action.id) 
          ? {...note, deleted: !note.deleted}
          : note
      )

    case 'CHANGE_TITLE':
      return state.items.map(note =>
        (note.id === action.id)
          ? {...note, title: action.value}
          : note
      )

    case 'CHANGE_TEXT':
      return state.items.map(note =>
        (note.id === action.id)
          ? {...note, text: action.value}
          : note
      )

    default:
      return state

  }
}

export default notes
