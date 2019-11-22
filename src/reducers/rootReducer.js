import { combineReducers } from 'redux'
import notesReducer from './note'
import commentsReducer from './comment'
import optionReducer from './option'

export default combineReducers({
  notesReducer,
  commentsReducer,
  optionReducer
})