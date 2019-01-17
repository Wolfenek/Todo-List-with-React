import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import Todos from './components/Todos'; 
import uuid from 'uuid';
import About from './components/pages/About';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Cook lunch',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Feed pet',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Go outside',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting with family',
        completed: false
      }
    ]
  }
  //METHODS
  //TOGGLE COMPLETE
  markCompleted = (id) => {
    this.setState({ 
      todos: this.state.todos.map(x => {
        if(x.id === id) {
          x.completed = !x.completed
        }
      return x;
    })

    })
  }
  //DELETE TODO
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(x => x.id !== id)]
    });
  }
  //CREATE TODO
  createTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      // Possible thanks to ES6, casue key and value is the same
      title, 
      completed: false
    }
    this.setState ({
      todos: [...this.state.todos, newTodo]
    });
  }

  //OUTPUT
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Route exact path='/' render={props => (
          <Fragment>
            <AddTodo createTodo={this.createTodo}/>
            {/*we're passing state as props below */}
            <Todos 
            todos={this.state.todos}
            // here it arrived all the way from TodoItem
            markCompleted={this.markCompleted}
            delTodo={this.delTodo}
            />
          </Fragment>
        )} />
          <Route path='/about' component={About} />
        
      </div>
      </Router>
    );
  }
}

export default App;
