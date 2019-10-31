import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

class NoteForm extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      name: '',
      content: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const {name, value} = e.target;
    this.setState({ [name]: value })
  }

  onSubmit() {
    const { name, content } = this.state;
    const { addNote } = this.props;

    if (!name || !content) {
      return alert('fill all input fields');
    } else {
      addNote({ name, content });
    }
    
    this.setState({
      name: '',
      content: ''
    })
  }

  render() {
    const { name, content } = this.state;

    return (
      <Fragment>
        <h1>New Note</h1>
        <form>
          <input name="name" value={name} onChange={this.onChange} placeholder="Title of the Note" required></input>
          <textarea name="content" value={content} onChange={this.onChange} placeholder="Your text..." required></textarea>
          <button onClick={this.onSubmit}>Save Changes</button>
        </form>
      </Fragment>
    );
  }
}

NoteForm.propTypes = {
  addNote: PropTypes.func.isRequired
};

export default NoteForm;