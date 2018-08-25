import React from 'react';

export default function TodoItem(props) {

	const { id, title, completed, deleteTodo } = props;

	const handleDelete = () => deleteTodo(id);

	return (
		<div key={id} style={{ display: 'flex', flexDirection: 'row' }}>
			<p style={{ marginLeft: 20, marginRight: 20 }}>{id}</p>
			<p style={{ marginLeft: 20, marginRight: 20 }}>{title}</p>
			<p style={{ marginLeft: 20, marginRight: 20 }}>{completed.toString()}</p>
			<button 
				style={{ marginLeft: 20, marginRight: 20, backgroundColor: 'red', color: 'white', border: 'none' }} 
				onClick={handleDelete}
			>
				X
			</button>
		</div>
	);
}