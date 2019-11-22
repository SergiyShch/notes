import React, { Fragment } from 'react'
import Item from './note-list-item'
import PropTypes from 'prop-types'

class NoteList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editName: '',
      editContent: ''
    }

    this.onEditSubmit = this.onEditSubmit.bind(this);
    this.onEditChange = this.onEditChange.bind(this);
  }

  onEditChange(e) {
    const {name, value} = e.target;
    this.setState({ [name]: value })
  }

  onEditSubmit() {
    const { editName, editContent } = this.state;
    const { editNote } =this.props;

    editNote({ editName, editContent });
    this.setState({
      editName: '',
      editContent: ''
    })
  }

  render() {
    return (
      <Fragment>
        <h1>Note List</h1>
        { this.props.notes.map((note, index) => 
          <Item  
            {...note}
            key={index}
            toggleEditing={() => this.props.toggleEditing(note.id)}
            toggleCommenting={() => this.props.toggleCommenting(note.id)}
            editNote={() => this.props.editNote(note.id)}
            removeNote={() => this.props.removeNote(index)}
            onEditChange={this.onEditChange}
            onEditSubmit={this.onEditSubmit}
            editName={this.state.editName}
            editContent={this.state.editContent}
          />
        )}
      </Fragment>
    );
  }
}

NoteList.defaultProps = {
  notes: []
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    }),
  ),
  removeNote: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  editNote: PropTypes.func.isRequired,
  onEditChange: PropTypes.func.isRequired,
  onEditSubmit: PropTypes.func.isRequired
}

export default NoteList;