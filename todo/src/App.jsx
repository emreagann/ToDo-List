import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import todoCreate from './components/todoCreate'
import todoList from './components/todoList'
function App() {
const[todos,setToDos] = useState([]);
const createTodo =(newtoDo) =>{
  setToDos([...todos,newtoDo]);
}
const removeTodo = (todoId) => {
  setToDos([...todos.filter((todo) => todo.id !== todoId)]);
}
const updateTodo = (todo) =>{
  const updatedTodos = todos.map((todo) =>{
    if(todo.id !== newtoDo.id){
      return todo;
    }
    return newtoDo;
  })
}
  return (
    <>
     <div className='App'>
      <div className='main'></div>
      <TodoCreate onCreateTodo = {createTodo}/>
      <todoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo = {onUpdateTodo}/>
     </div>
    </>
  )
}

export default App
