const user = (
  state = {
    loading: true,
    token: null,
    userdata: []
  },
  action
) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        token: action.token,
        userdata: action.userdata
      }

    case 'LOGOUT':
      return {
        token: null,
        userdata: []
      }

    case 'READY':
      return {
        loading: false
      }

    default:
      return state
  }
}

export default user
