const notes = (
  state = {
    isFetching: false,
    items: [],
  },
  action
) => {
  switch (action.type) {
    case 'REQUEST_NOTES':
      return Object.assign({}, state, {
        isFetching: true,
        lastUpdated: true
      })

    case 'RECEIVE_NOTES':
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
        lastUpdated: action.receivedAt
      })

    case 'TOGGLE_DELETE':
      return {
        ...state,
        items: state.items.map(note =>
          (note.id === action.id) 
            ? {...note, deleted: !note.deleted}
            : note
        )
      }

    case 'CHANGE_TITLE':
      return {
        ...state,
        items: state.items.map(note =>
          (note.id === action.id) 
            ? {...note, title: action.value}
            : note
        )
      }

    case 'CHANGE_TEXT':
      return {
        ...state,
        items: state.items.map(note =>
          (note.id === action.id) 
            ? {...note, text: action.value}
            : note
        )
      }

    default:
      return state

  }
}

export default notes
