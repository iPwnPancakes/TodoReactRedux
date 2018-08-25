import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
	render() {
		return (
			<div key="todoList">
				{
					this.props.todos.map(todo => 
						<TodoItem 
							key={todo._id}
							id={todo._id} 
							title={todo.title} 
							completed={todo.completed}
							deleteTodo={this.props.deleteTodo}
						/>
					)
				}
			</div>
		);
	}
}