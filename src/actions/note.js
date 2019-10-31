import { ADD_NOTE, REMOVE_NOTE, EDIT_NOTE, TOGGLE_EDITING, ADD_COMMENT, TOGGLE_COMMENTING } from '../constants/note'

export const addNote = (note) => ({
  type: ADD_NOTE,
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

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment
});

export const toggleCommenting = (id) => ({
  type: TOGGLE_COMMENTING,
  id
});

