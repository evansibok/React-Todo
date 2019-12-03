import React, { Component } from 'react'

export default class Todo extends Component {

	render() {
		return (
			<p key={this.props.todo.id}>
				{this.props.todo.task}
			</p>
		)
	}
}
