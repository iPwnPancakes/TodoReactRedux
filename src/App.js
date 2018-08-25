import React from 'react'; 
import './App.css';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { Provider } from 'react-redux';

const Todos = [
	{ _id: '1', title: 'Create todo list', completed: true },
	{ _id: '2', title: 'Create todo item', completed: true },
	{ _id: '3', title: 'Add create todo', completed: false }
];

class TodoApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: Todos
		};

		this.deleteTodo = this.deleteTodo.bind(this);
		this.addTodo = this.addTodo.bind(this);
	}

	addTodo(newTodo) {
		let todos = this.state.todos;

		todos.push(newTodo);

		this.setState({ todos });
	}

	deleteTodo(id) {
		let todos = this.state.todos.filter(todo => todo._id !== id);

		this.setState({ todos });
	}

	render() {
		return (
			<Provider>
				<div className="App">
					<h1>Todo List</h1>
					<TodoList 
						todos={this.state.todos} 
						deleteTodo={this.deleteTodo}
					/>

					<AddTodoForm
						addTodo={this.addTodo}
					/>
				</div>
			</Provider>
		);
	}
}

export default TodoApp;
