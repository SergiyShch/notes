import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import CommentFormContainer from './Comment/CommentForm/container'
import CommentListContainer from './Comment/CommentList/container'

class Item extends React.Component {
  render() {
    const { editName, editContent } = this.props;

    return (
      <Fragment>
        <div className="item">
          <p>Title: {this.props.name}</p>
          <p>Content: {this.props.content}</p>
          <hr/>
          <div className="buttons-row">
            <button onClick={this.props.removeNote}>REMOVE</button>
            <button onClick={this.props.toggleEditing}>EDIT</button>
            <button onClick={this.props.toggleCommenting}>+ADD COMMENT</button>
          </div>
        </div>
        
        { this.props.isEditing &&
          <form>
            <input name="editName" value={editName} onChange={this.props.onEditChange} placeholder="Title of the Note" required></input>
            <textarea name="editContent" value={editContent} onChange={this.props.onEditChange} placeholder="Your text..." required></textarea>
            <button onClick={this.props.onEditSubmit}>Save Changes</button>
          </form>
        }
        { this.props.isCommenting && <CommentFormContainer />}
        <CommentListContainer/>
      </Fragment>
    )
  } 
}

Item.propTypes = {
  removeNote: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
    note: PropTypes.shape({
      name: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    }).isRequired,
  onEditChange: PropTypes.func.isRequired,
  onEditSubmit: PropTypes.func.isRequired
}

export default Item;