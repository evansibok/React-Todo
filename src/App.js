import React from 'react';

import data from './components/TodoComponents/Todo'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);

    this.state = {
      todos: data,
    }

    this.deleteTodo = this.deleteTodo.bind(this);
  }



  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    })
  }

  deleteTodo(id, completed) {

  }


  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        {/* Submit Button */}
        reset state after submission

        {/* 'Clear all' Button */}
        add Delete handler to clear all button

        <TodoList
          todos={todos}
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
