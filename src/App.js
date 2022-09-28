import { useState } from 'react';
import './App.css';
import NewTodo from './components/new-todo/NewTodo'
import Todo from './components/todos/Todo'

function App() {
  
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => setTodos(prevState => [...prevState, todo])

  const deleteTodo = (newTodos) => setTodos(newTodos)

  const editTodo = (newTodos) => setTodos(newTodos)
  

  return (
    <div className="app">

      <h2 className = "title">What's your plan for today?</h2>

      <NewTodo onSubmit = {addTodo} />

      <ul className = "todo-list">
        {
          todos.map(todo => (
            <Todo 
              key = {todo.id} 
              todoList = {todos}
              onDelete = {deleteTodo}
              onEdit = {editTodo}
              {...todo} 
              />
          ))
        }
      </ul>
      
    </div>
  );
}

export default App;
