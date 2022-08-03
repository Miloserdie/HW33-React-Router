import { ACTION_UPDATE_TASK, ACTION_SET_TODOS, ACTION_ADD_TASK, ACTION_DELETE_TASK } from "../actions/types";

const initialState = {
	todos: []
};

export default function rootReducer(state = initialState, {type, payload}) {
	switch(type) {
		case ACTION_SET_TODOS:
			return {...state, todos: payload}
		case ACTION_ADD_TASK:
			return {...state, todos: [...state.todos, payload]}
		case ACTION_DELETE_TASK:
			return {...state, todos: state.todos.filter((task) => task.id !== payload)}
		case ACTION_UPDATE_TASK:
			return {...state, todos: state.todos.map((task) => {
				if(task.id === payload.id) {
					return payload.task;
				}

				return task;
			})}
		default: return state; 
	}

}