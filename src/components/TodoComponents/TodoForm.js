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

	render() {
		return (
			<div>
				<form>
					<input
						type="text"
						placeholder="...todo"
						value={this.state.text}
						onChange={this.onInputChange}
					/>
					{` `}
					<button onClick={this.props.addTodo} >Add Todo</button>
					{` `}
					<button>Clear all</button>
				</form>
			</div>
		)
	}
}
