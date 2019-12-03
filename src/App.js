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

  clearComplete = (evt) => {
    evt.preventDefault();
    let allTodos = this.state.todos;
    let filteredTodos = allTodos.filter((currentTodo) => {
      return currentTodo.complete === false;
    })
    this.setState({ todos: filteredTodos })
  }



  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoList
          todos={todos}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm
          todos={todos}
          addTodo={this.addTodo}
          clearComplete={this.clearComplete}
        />
      </div>
    );
  }
}

export default App;
