const TODOS_URL = 'http://localhost:3000/todos/';

export async function getTodosReq() {
	const res = await fetch(TODOS_URL);

	return res.json();
}

export async function getTaskDiscriptionReq(id) {
	const res = await fetch(`${TODOS_URL}/${id}`);
	
	return res.json();
}

export async function addTaskReq(task) {
	await fetch(TODOS_URL, {
		method: 'POST',
		body: JSON.stringify(task),
		headers: {'Content-Type': 'application/json'}
		
	})
}

export async function updateTaskReq(id, task) {
	await fetch(`${TODOS_URL}/${id}`, {
		method: 'PUT',
		body: JSON.stringify(task),
		headers: {'Content-Type': 'application/json'},
	})
}

export async function deleteTaskReq(id) {
	await fetch(`${TODOS_URL}/${id}`, {
		method: 'DELETE'
	})
}