import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import { loadState, saveState } from './selectors/localStorage'

const persistedState = loadState();

export const store = createStore(
  rootReducer,
  {notesReducer: persistedState.notes, commentsReducer: persistedState.comments},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState({
    notes: store.getState().notesReducer,
    comments: store.getState().commentsReducer
  });
});

export default store;