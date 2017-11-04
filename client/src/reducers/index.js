import { combineReducers } from 'redux'

import notes from './notes'
import toolbar from './toolbar'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
  notes,
  toolbar,
  visibilityFilter
})

export default rootReducer
