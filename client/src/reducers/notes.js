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

    default:
      return state

  }
}

export default notes
