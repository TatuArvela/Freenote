import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import notes from './notes'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
  notes,
  form: formReducer,
  visibilityFilter
})

export default rootReducer
