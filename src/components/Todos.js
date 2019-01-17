import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class Todos extends Component {
  render() {
    return this.props.todos.map((x)=>(
      // We're also passing props here
      <TodoItem key={x.id} x={x}
      // Below we pass the props from TodoItem to App.
      // We want to reach the state to change it  
      markCompleted={this.props.markCompleted}
      delTodo={this.props.delTodo} />
      
    ));
  }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;



