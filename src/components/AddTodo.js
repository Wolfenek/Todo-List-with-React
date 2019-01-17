import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  //STATE
  state = {
    title: ''
  }
  //METHODS
  createTodo = (event) => this.setState({
    title: event.target.value
  })

  onSubmit = (event) => {
    event.preventDefault();
    this.props.createTodo(this.state.title);
    this.setState({ title: '' });
  }

  //OUTPUT
  render() {
    return (
      <div>
      <form 
        style={{display: 'flex'}}
        onSubmit={this.onSubmit}
        >
          <input 
            type="text"
            placeholder="Add new todo..."
            style={{flex: '11'}}
            value={this.state.title}
            onChange={this.createTodo}
          />
          <input
            type="submit"
            value="OK"
            style={{flex: '1', background: '#303030', color: 'white', border: 'none'}}
          />
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  title: PropTypes.object.isRequired
}
export default AddTodo;