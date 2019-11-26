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
    const { editNote, editFireNote } =this.props;
    const id = this.props.currentNote;
    
    if (this.props.option === 'firebase') {
      editFireNote({ editName, editContent }, id);
    } else {
      editNote({editName, editContent});
    }
    
    this.setState({
      editName: '',
      editContent: ''
    })
  }

  UNSAFE_componentWillMount() {
    if (this.props.option === 'firebase') {
      this.props.fetchNotesThunk();
    }
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
            removeNote={(index) => ((this.props.option === 'local') ? this.props.removeNote(index) : this.props.removeFireNote(note.id))}
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
  onEditChange: PropTypes.func.isRequired,
  onEditSubmit: PropTypes.func.isRequired,
  editFireNote: PropTypes.func.isRequired
}

export default NoteList;