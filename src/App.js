import React from 'react';

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    }
  }



  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    })
  }

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(t => {
        if (t.id === id) {
          return {
            ...t,
            complete: !t.complete,
          }
        } else {
          return t;
        }
      })
    })
  }

  // deleteTodo(id, completed) {

  // }


  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        Toggle Complete for each todo

        {/* 'Clear all' Button */}
        add Delete handler to clear all button

        <TodoList
          todos={todos}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm
          todos={todos}
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
