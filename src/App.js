import { useEffect, useState } from 'react';
import { NewTaskField } from './components/NewTaskField';
import { Search } from './components/Search';
import { TodoList } from './components/TodoList';
import { makeRequest } from './api/api';
import './App.css';

function App() {
  const [newTodoField, setNewTodoField] = useState('');
  const [searchState, setSearchState] = useState('');
  const [todos, setTodos] = useState([]);

  console.log(todos);
  useEffect(() => {
    getTodos();
  }, []);

  function searchTodo(e) {
    e.preventDefault();
    setSearchState(e.target.value);
  }

  function trackToNewTodoField(e) {
    setNewTodoField(e.target.value);
  }
  function addTodo(e) {
    e.preventDefault();
    setNewTodoField('');
  }

  function toggleTodoCheckbox(todoId) {}

  async function getTodos() {
    const res = await makeRequest(`query Todos {
			todos{
				data{
					id
					title
					completed
				}
			}
		}`);
    const todos = await res.data.data.todos.data;
    setTodos(todos);
  }

  return (
    <div className='app_wrapper'>
      <Search searchTodo={searchTodo} />
      <NewTaskField trackToNewTodoField={trackToNewTodoField} addTodo={addTodo} />
      <TodoList todos={todos} toggleTodoCheckbox={toggleTodoCheckbox} />
    </div>
  );
}

export default App;
