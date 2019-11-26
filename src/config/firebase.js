import firebase from 'firebase/app'
import 'firebase/database'
import { removeNote, fetchNotes, editNote } from '../actions/note'
import { fetchComments } from '../actions/comment'


export const firebaseConfig = {
  apiKey: "AIzaSyACuO5r51mHPAr9A5MZs9Gx8psDEVPjTjQ",
  authDomain: "notesapp-b3776.firebaseapp.com",
  databaseURL: "https://notesapp-b3776.firebaseio.com",
  projectId: "notesapp-b3776",
  storageBucket: "notesapp-b3776.appspot.com",
  messagingSenderId: "472216752845",
  appId: "1:472216752845:web:1d05c9b0abefeb263e4f84",
  measurementId: "G-EVG2PNHEN7"
};

firebase.initializeApp(firebaseConfig);


const databaseRef = firebase.database().ref();
export const notesRef = databaseRef.child('notes');
export const commentsRef = databaseRef.child('comments');

export const addFireNote = newNote => async dispatch => {
    notesRef.push().set({name: newNote.name, content: newNote.content});
};

export const removeFireNote = id => {
  return dispatch => {
    notesRef.child(id).remove()
    .then(() => dispatch(removeNote(id)))
  }
};

export const editFireNote = (edit, id) => {
  return dispatch => {
    notesRef.child(id).set({name: edit.editName, content: edit.editContent})
    .then(() => dispatch(editNote(edit)))
  }
};

export const addFireComment = comment => async dispatch => {
  commentsRef.push().set({author: comment.author, content: comment.content, currentNote: comment.currentNote, createdAt: comment.createdAt});
}

export function fetchNotesThunk() {
  return dispatch => {
    const notes = [];
    notesRef.once('value', snap => {
      snap.forEach(data => {
        let note = data.val();
        note.id = data.key;
        notes.push(note)
      })
    })
    .then(() => dispatch(fetchNotes(notes)))
  }
};

export function fetchCommentsThunk() {
  return dispatch => {
    const comments = [];
    commentsRef.once('value', snap => {
      snap.forEach(data => {
        let comment = data.val();
        comments.push(comment)
      })
    })
    .then(() => dispatch(fetchComments(comments)))
  }
};


export default notesRef;