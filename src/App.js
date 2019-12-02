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
      initialTodo: {
        task: '',
        id: Date.now(),
        completed: false,
      }
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  onInputChange(evt) {
    this.setState({
      initialTodo: {
        task: evt.target.value,
      }
    });
  }

  addTodo(evt) {
    evt.preventDefault();
  }


  render() {
    const { todos, initialTodo } = this.state;
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        {/* Submit Button */}
        add Submit handler to add button

        {/* 'Clear all' Button */}
        add Delete handler to clear all button

        <TodoList
          todos={todos}
        />
        <TodoForm
          initialTodo={initialTodo}
          onInputChange={this.onInputChange}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
