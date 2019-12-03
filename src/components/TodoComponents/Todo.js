import React, { Component } from 'react'

export default class Todo extends Component {

	render() {
		return (
			<p style={{ textDecoration: this.props.complete ? "line-through" : "" }}
				onClick={this.props.toggleComplete}
			>
				{this.props.todo.task}
			</p>
		)
	}
}
