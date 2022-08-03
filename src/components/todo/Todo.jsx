import './Todo.scss';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Todo({todo, onUpdate, onDelete}){
	const task = todo.task; 
	const id = todo.id;
	const discription = todo.discription;
	const status = todo.status ? 'done' : 'in-progress';

	function changeStatus() {
		const newTask = {
			id: id,
			task: task,
			discription: discription,
			status: !todo.status
		}

		onUpdate(id, newTask);
	}

	return (
		<li className={`todos-item ${status}`}>
			<div className='todos-info'>
				<p className={`todos-item-text ${status}`}>{task}</p>
				<Link className={`todos-link btn ${status}`} to={`/discription/${id}`} >Discription</Link>
			</div>
			<div className="buttons">
				<Button 
					sx={{
						color: 'white',
						background: 'none',
						":hover": {
							background: 'rgb(0, 182, 121)',
						}
					}} 
					onClick={changeStatus} 
					className={`todos-btn btn ${status}`}
					>Change Status
				</Button>
				<Button 
					sx={{
						color: 'white',
						  background: 'none',
						  ":hover": {
						  	background: 'rgb(196, 4, 100)',
					  		}
				  	}} 
					onClick={() => onDelete(id)} 
					className={`todos-btn btn ${status}`}>
					Delete
				</Button>
			</div>
		</li>
	)
}

export default Todo;