// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'

import Todo from "./Todo"

export default class TodoList extends Component {

	render() {
		return (
			<div>
				{
					this.props.todos.map(todo => (
						<Todo
							key={todo.id}
							todo={todo}
							toggleComplete={() => this.props.toggleComplete(todo.id)}
							clearComplete={this.props.clearComplete}
						/>
					)
					)
				}
			</div>
		)
	}
}
