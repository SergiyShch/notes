import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ author, content, time}) => (
  <div className="comment-item">
    <p>Author: {author}</p>
    <p>Content: {content}</p>
    <p>{time}</p>
  </div>
)

Item.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}

export default Item;