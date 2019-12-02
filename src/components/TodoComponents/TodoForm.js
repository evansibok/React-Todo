import React, { Component } from 'react'

export default class TodoForm extends Component {
	render() {
		return (
			<div>
				<input
					type="text"
					placeholder="...todo"
					name="enter_todo"
					value={this.props.initialTodo.task}
					onChange={this.props.onInputChange}
				/>
				{` `}
				<button onClick={this.props.addTodo} >Add Todo</button>

				{` `}
				<button>Clear all</button>
			</div>
		)
	}
}
