import React from 'react'
import ReactDOM from 'react-dom'
import Router from './routers/router'
import { Provider } from 'react-redux'
import { store } from './store'
import './styles.scss'

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>, 
  rootElement
);