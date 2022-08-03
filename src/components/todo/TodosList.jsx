import Todo from './Todo';
import './TodosList.scss'
import { useSelector } from 'react-redux';



function TodosList({ onDelete, onUpdate }) {
	const todos = useSelector(state => state.todos);
	
	return (
		<ul className='todos-list'>
			{todos.map((todo) => {
				return (
					<Todo onUpdate={onUpdate} onDelete={onDelete} todo={todo} key={todo.id}></Todo>
				)
			})}
		</ul>
	)
} 

export default TodosList;