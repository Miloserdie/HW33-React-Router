import { ACTION_UPDATE_TASK, ACTION_SET_TODOS, ACTION_ADD_TASK, ACTION_DELETE_TASK } from "./types";
import { updateTaskReq, getTaskDiscriptionReq, deleteTaskReq, addTaskReq, getTodosReq } from '../../components/todo/todosApi';

export function setTodosAction(todos) {
	return {
		type: ACTION_SET_TODOS,
		payload: todos
	}
}

export function addTaskAction(task) {
	return {
		type: ACTION_ADD_TASK,
		payload: task
	}
}

export function deleteTaskAction(id) {
	return {
		type: ACTION_DELETE_TASK,
		payload: id
	}
}

export function updateTaskAction(id, task) {
	return {
		type: ACTION_UPDATE_TASK,
		payload: {id, task}
	}
}

export function getTodosReqAction() {
	return async function(dispatch) {
		try{
			const todos = await getTodosReq();

			dispatch(setTodosAction(todos));
		} catch(e) {
			console.warn(e)
		}
	}
}

export function addTaskReqAction(task) {
	return async function(dispatch) {
		try{
			await addTaskReq(task);

			dispatch(addTaskAction(task));
		} catch(e) {
			console.warn(e)
		}
	}
}

export function updateTaskReqAction(id, task) {
	return async function(dispatch) {
		try{
			await updateTaskReq(id, task);
		
			dispatch(updateTaskAction(id, task))
		} catch(e) {
			console.warn(e)
		}
	}
}

export function deleteTaskReqAction(id) {
	return async function(dispatch) {
		try{
			await deleteTaskReq(id);

			dispatch(deleteTaskAction(id));
		} catch(e) {
			console.warn(e)
		}
	}
}

export function getTaskDiscriptionReqAction(id) {
	return async function() {
		try{
			return getTaskDiscriptionReq(id);
		} catch(e) {
			console.warn(e)
		}
	}
}

export function updateTaskDiscriptionReqAction(id, task) {
	return async function() {
		try{
			await updateTaskReq(id, task);
		} catch(e) {
			console.warn(e)
		}
	}
}