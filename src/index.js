import React from 'react'
import ReactDOM from 'react-dom'
import Router from './routers/router'
import { createStore } from "redux"
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'
import './styles.scss'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>, 
  rootElement
);