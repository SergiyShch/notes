import { ADD_LOCAL_NOTE, ADD_FIRE_NOTE, REMOVE_NOTE, EDIT_NOTE, TOGGLE_EDITING, TOGGLE_COMMENTING } from '../constants/note'
import { store } from '../store'

const state = store.getState();

export const addNote = (note) => ({
  type:  (state.optionReducer.option === 'local') ? ADD_LOCAL_NOTE : ADD_FIRE_NOTE,
  note: { name: note.name , content: note.content }
});

export const removeNote = (index) => ({
  type: REMOVE_NOTE,
  index
});

export const editNote = (edit) => ({
  type: EDIT_NOTE,
  edit
});

export const toggleEditing = (id) => ({
  type: TOGGLE_EDITING,
  id
});

export const toggleCommenting = (id) => ({
  type: TOGGLE_COMMENTING,
  id
});

