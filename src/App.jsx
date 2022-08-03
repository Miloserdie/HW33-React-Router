import './App.css';
import TodosManagement from './components/todo/TodosManagement';
import { Routes, Route } from 'react-router-dom'
import TaskDiscription from './components/todo/TaskDiscription';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<TodosManagement />} />
				<Route path='/discription/:id' element={<TaskDiscription />} />
			</Routes>
		</>
	)
}

export default App;