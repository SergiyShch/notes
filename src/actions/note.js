import { ADD_NOTE, REMOVE_NOTE, EDIT_NOTE, TOGGLE_EDITING, TOGGLE_COMMENTING, FETCH_NOTES } from '../constants/note'

export const addNote = (note) => ({
  type: ADD_NOTE,
  note
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

export const fetchNotes = (notes) => ({
  type: FETCH_NOTES,
  notes
});

