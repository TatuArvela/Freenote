import { combineReducers } from 'redux'

import notes from './notes'
import toolbar from './toolbar'
import user from './user'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
  notes,
  toolbar,
  user,
  visibilityFilter
})

export default rootReducer
