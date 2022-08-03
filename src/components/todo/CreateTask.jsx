import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './CreateTask.scss';

function CreateTask({onCreate}) {
	const [inputValue, setInputValue] = useState('');

	function changeValue(e) {
		setInputValue(e.target.value);
	}

	function createTask(e) {
		e.preventDefault()

		const task = {
			id: Math.random().toString(36).substring(2, 9),
			task: inputValue,
			discription: '',
			status: false
		}

		onCreate(task);

		setInputValue('');
	}
	
	return(
		<>
			<form className="task-form" action="">
				<TextField
				sx = {
					{
						input: { 
							color: 'white'
						},
						width: '500px',
					  }
					}
					
				onChange={changeValue} 
				label="Task" 
				color="success"
				variant="standard"
				value={inputValue} />

				<Button 
				sx={{
    				width: 150,
    				color: 'white',
					background: 'none',
					border: "1px solid rgb(0, 182, 121)",
					":hover": {
						background: 'rgb(0, 182, 121)',
					}
				}}  
				className="task-btn btn" 
				variant="contained"
				onClick={createTask}>Add Task
				</Button>
			</form>
		</>
	)
}

export default CreateTask;