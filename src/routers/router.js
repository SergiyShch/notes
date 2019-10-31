import React from 'react';
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import Main from '../components/Layout/main-layout'
import NoteFormContainer from '../components/NoteForm/container'
import NoteListContainer from '../components/NoteList/container'

const Root = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={NoteListContainer} />
      <Route path="note" component={NoteFormContainer} />
    </Route>
  </Router>
);

export default Root;