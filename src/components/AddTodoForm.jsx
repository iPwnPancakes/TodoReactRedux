import React from 'react';

export default class AddTodoForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			_id: undefined,
			title: undefined,
			completed: false,
		};
	}

	render() {
		return (
			<form style={{ textAlign: 'left' }}>
				<label>ID</label>
				<input type="text" onKeyUp={(event) => {
					let value = event.target.value;

					this.setState({ _id: value });
				}} />

				<label>Title</label>
				<input type="text" onKeyUp={(event) => {
					let value = event.target.value;

					this.setState({ title: value });
				}} />

				<label>Completed</label>
				<select 
					defaultValue="false"	
					onChange={(event) => {
						let value = event.target.value;
						
						this.setState({ completed: value });
					}}
				>
					<option value="true">True</option>
					<option value="false">False</option>
				</select>

				<button onClick={(event) => {
					this.props.addTodo(this.state);

					

					return event.preventDefault();
				}}>Save</button>
			</form>
		)
	}
}