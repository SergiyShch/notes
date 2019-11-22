import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import CommentListContainer from './Comment/CommentList/container'

const Item = (props) => {
    const { editName, editContent } = props;

    return (
      <Fragment>
        <div className="item">
          <p>Title: {props.name}</p>
          <p>Content: {props.content}</p>
          <hr/>
          <div className="buttons-row">
            <button onClick={props.removeNote}>REMOVE</button>
            <button onClick={props.toggleEditing}>EDIT</button>
            <button onClick={props.toggleCommenting}>+ADD/VIEW COMMENTS</button>
          </div>
        </div>
        
        { props.isEditing &&
          <form>
            <input name="editName" value={editName} onChange={props.onEditChange} placeholder="Title of the Note" required></input>
            <textarea name="editContent" value={editContent} onChange={props.onEditChange} placeholder="Your text..." required></textarea>
            <button onClick={props.onEditSubmit}>Save Changes</button>
          </form>
        }
        
        { props.isCommenting && <CommentListContainer />}
      </Fragment>
    ) 
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