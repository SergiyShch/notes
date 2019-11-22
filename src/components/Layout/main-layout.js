import React from 'react';
import { Link } from 'react-router';
import Settings from '../NoteList/settings'

const Main = (props) => (
  <div className="main">
    <h1>The Notes</h1>
    <ul className="list">
      <li><Link to="/">View all notes</Link></li>
      <li><Link to="note">New Note/Edit Note</Link></li>
      <li><Settings /></li>
    </ul>
    <div className="child">{props.children}</div>
  </div>
)

export default Main;