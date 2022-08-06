import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getTaskDiscriptionReqAction, updateTaskDiscriptionReqAction } from '../../store/actions';
import './TaskDiscription.scss'
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

function TaskDiscription() {
	const dispatch = useDispatch(); 
	const {id} = useParams();
	const [todo, setTodo] = useState({});
	const status = todo.status ? 'done' : 'in-progress'; 
	const [inputValue, setInputValue] = useState(todo.discription);
	const [btnBlock, setBtnBlock] = useState(false);

	useEffect(() => {
		async function getTask() {
			const todo = await dispatch(getTaskDiscriptionReqAction(id))

			setTodo(todo);
			setInputValue(todo.discription);
		} 

		getTask()
	}, [id, dispatch])  //Тут таккож просив дописати 
	
	
	function changeValue(e) {
		setInputValue(e.target.value);
	}

	function saveValue(e) {
		setBtnBlock(true)
		e.preventDefault();
		const newTask = {
			id: id,
			task: todo.task,
			discription: inputValue,
			status: todo.status
		}

		dispatch(updateTaskDiscriptionReqAction(id, newTask))

		setTimeout(() => setBtnBlock(false), 1000);
	}

	return (
		<section className='task-discription'>
			<div className='task-discription__info'>
				<Link className={`task-discription__link-back btn ${status}`} to='/'>BACK</Link>
				<h2 className='task-discription__title'>Task: {todo.task}</h2>
				<form className='task-discription__line'>
					<textarea onChange={changeValue} className={`task-discription__text ${status}`} value={inputValue}></textarea>
					<Button 
						sx={{
							width: 120,
							display: 'flex',
							padding: '8px 10px 5px 10px',
							color: 'white',
							background: 'none',
							":hover": {
								background: 'rgb(0, 182, 121)',
							}
				 	 	}} 
						startIcon={<SaveIcon />}
						disabled={btnBlock}
						onClick={saveValue} 
						className={`task-discription__btn btn ${status}`}>
						Save
					</Button>
				</form>
			</div>
		</section>
	)
}

export default TaskDiscription;