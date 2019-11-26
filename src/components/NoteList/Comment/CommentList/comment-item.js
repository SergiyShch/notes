import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ author, content, createdAt}) => (
  <div className="comment-item">
    <p>Author: {author}</p>
    <p>Content: {content}</p>
    <p>CreatedAt: {createdAt}</p>
  </div>
)

Item.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
}

export default Item;