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
        loading: false,
        token: action.token,
        userdata: action.userdata
      }

    case 'LOGOUT':
      return {
        loading: false,
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
