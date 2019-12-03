import React, { Component } from 'react'

export default class Todo extends Component {

	render() {
		return (
			<p style={{ textDecoration: this.props.todo.complete ? "line-through" : "" }}
				className={this.props.todo.complete ? "completeStyle" : null}
				onClick={this.props.toggleComplete}
			>
				{this.props.todo.task}
			</p>
		)
	}
}
