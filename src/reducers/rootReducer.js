import { combineReducers } from 'redux'
import notesReducer from './note'
import commentsReducer from './comment'

export default combineReducers({
  notesReducer,
  commentsReducer
})