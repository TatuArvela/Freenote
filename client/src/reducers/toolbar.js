const toolbar = (state = 'EDIT', action) => {
  switch (action.type) {

    case 'SWITCH_TAB':
      return action.tab

    default:
      return state

  }
}

export default toolbar
