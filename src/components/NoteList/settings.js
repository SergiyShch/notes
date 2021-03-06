import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setOption } from '../../actions/option'
import { fetchNotesThunk } from '../../config/firebase'

class Settings extends React.Component {
  constructor(props) {
      super(props);
      
      this.state = {
        option: 'local'
      }
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {  
    this.setState({
      option: e.target.value
    });
  }
  
  onSubmit(e) {
    e.preventDefault();
    const { setOption, option } = this.props;

    setOption(this.state.option);
    localStorage.removeItem('state');

    if (option === 'firebase') {
      this.props.fetchNotesThunk();
    }
  }

  render() {
    return (
      <form>
        <label>Please select a save option:</label>
        <input type="radio" value="local" checked={this.state.option === 'local'} onChange={this.onChange} />Local Storage (default option)
        <input type="radio" value="firebase" checked={this.state.option === 'firebase'} onChange={this.onChange} />Firebase
        <button onClick={this.onSubmit}>Save</button>
      </form>
    );
  }
}

const mapStateToProps = ({optionReducer: {option}}) => ({
  option
});

const mapDispatchToProps = (dispatch) => ({
  setOption: (option) => dispatch(setOption(option)),
  fetchNotesThunk: () => dispatch(fetchNotesThunk())
});

Settings.propTypes = {
  setOption: PropTypes.func.isRequired
}


export default connect(mapStateToProps,mapDispatchToProps)(Settings);