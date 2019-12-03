import React, { Component } from 'react'

export default class Todo extends Component {

	render() {
		return (
			<div style={{ display: "flex", alignItems: "center" }}>
				<p
					style={{ textDecoration: this.props.todo.complete ? "line-through" : "", marginRight: "1em" }}
					className={this.props.todo.complete ? "completeStyle" : null}
					onClick={this.props.toggleComplete}
				>
					{this.props.todo.task}
				</p>
				<button style={{ width: "20px", height: "20px" }}>x</button>
			</div>
		)
	}
}
