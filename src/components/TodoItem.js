import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  //STYLES
  getStyle = () => {
    return {
        padding: '10px',
        borderBottom: '2px teal solid',
        // ternarny operator for choosing style below
        textDecoration: this.props.x.completed ? 'line-through' : 'none',
        // ternarny operator for choosing style below
        background: this.props.x.completed ? 'purple' : 'darkblue'
      }
    }
  checkboxStyle = () => {
    return {
      borderRadius: '10%',
      width: '25px',
      height: '25px',
      marginRight: '5px',
      cursor: 'pointer',
      float: 'left',
    }
  }

  buttonStyle = () => {
    return {
      borderRadius: '10%',
      background: 'yellow',
      width: '40px',
      height: '20px',
      marginLeft: '10px',
      fontWeight: 'bold',
      cursor: 'pointer'
    }
  }
  //OUTPUT
    render() {
      //DESTRUCTURING
      const { id, title } = this.props.x;
      return (
        <div style={this.getStyle()}>
          
            <input 
            type="checkbox" 
            style={this.checkboxStyle()} 
            //we're binding this & id (thanks to destructuring)
            //and passing it all the way up to App
            onChange={this.props.markCompleted.bind(this, id)} />
            {/* gets simplified thanks to destructuring */}
            {title}
            <button 
            style={this.buttonStyle()}
            onClick={this.props.delTodo.bind(this, id)}
            >X</button>
          
        </div>
      )
     
    }
  }

TodoItem.propTypes = {
  x: PropTypes.object.isRequired
}

export default TodoItem;