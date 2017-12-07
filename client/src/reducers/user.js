const user = (
  state = {
    token: null,
    userdata: []
  },
  action
) => {
  switch (action.type) {

    case 'LOGIN':
    console.log("LOGIN!")
      return {
        token: action.token,
        userdata: action.userdata
      }

    case 'LOGOUT':
      return {
        token: null,
        userdata: []
      }

    default:
      return state
  }
}

export default user
