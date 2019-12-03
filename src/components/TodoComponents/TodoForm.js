import React, { Component } from 'react'

export default class TodoForm extends Component {

	state = {
		text: "",
	}

	onInputChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value,
		})
	}

	handleSubmit = (evt) => {
		evt.preventDefault();
		this.props.addTodo({
			task: this.state.text,
			id: Date.now(),
			complete: false,
		});
		this.setState({
			text: "",
		});
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
					<button onClick={this.props.clearComplete}>Clear Completed</button>
				</form>
			</div>
		)
	}
}
