import React, { Component } from 'react'

export default class TodoForm extends Component {

	state = {
		text: "",
	}

	onInputChange = (evt) => {
		this.setState({
			text: evt.target.value,
		})
	}

	handleSubmit = (evt) => {
		evt.preventDefault();
		this.props.addTodo({
			task: this.state.text,
			id: Date.now(),
			complete: false,
		})
	}

	render() {
		return (
			<div>
				<form>
					<input
						type="text"
						placeholder="...todo"
						name="text"
						value={this.state.text}
						onChange={this.onInputChange}
					/>
					{` `}
					<button onClick={this.handleSubmit} >Add Todo</button>
					{` `}
					<button>Clear all</button>
				</form>
			</div>
		)
	}
}
