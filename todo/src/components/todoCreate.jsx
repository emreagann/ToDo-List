import React from 'react'
import '../App.css';
function todoCreate({onCreateTodo}) {
  const [newtoDo,setNewTodo] = useState('');
const clearInput = () => {
setNewTodo('');
}
  const createTodo = () =>{
    if(!newtoDo){
      return true;
    }
const request = {
  id :Math.floor(Math.random()*99999999999),
  content:newtoDo
}
onCreateTodo(request);
clearInput();
  }
  return (
    <div className='todo-create'>
          <input value={newtoDo} onChange={(e)=>setNewTodo(e.target.value)} className='todo-input' type="text" placeholder='Enter a todo' />
          <button onClick={createTodo} className='todo-create-button'>Create a todo list</button>
    </div>
  )
}

export default todoCreate