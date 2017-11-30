const notes = (
  state = {
    isFetching: false,
    items: [],
  },
  action
) => {
  switch (action.type) {

    case 'REQUEST_NOTES':
    case 'REQUEST_SINGLE_NOTE':
      return Object.assign({}, state, {
        isFetching: true
      })

    case 'RECEIVE_NOTES':
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
        lastUpdated: action.receivedAt
      })

    case 'RECEIVE_SINGLE_NOTE':
      return Object.assign({}, state, {
        isFetching: false,
        items: state.items.map((item, index) => {
          console.log(...item, ...action.item)
          if(item._id !== action.item._id) {
            return item;
          }
          return {
            ...item,
            ...action.item
          }
        }),
        lastUpdated: action.receivedAt
      })

    default:
      return state

  }
}

export default notes
