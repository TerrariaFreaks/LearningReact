import { useState } from 'react'
import './App.css'

function App() {
 const [input, setInput] = useState("")
  const [todoList, setTodoList] = useState([])

  const addTodoItem = () => {
    const item = {
      id: Date.now(),
      text: input,
      completed: false
    }
    setTodoList(prev => [...prev, item])
    setInput("")
  }

  const toggleCompleted = (id) => {
    setTodoList(todoList.map((t)=> {
      if (t.id == id){
        return {
          ...t,
          completed : !t.completed
        }
      } else{
        return t;
      }
    }))
  }
  const deleteTodo = (id) => {
    setTodoList(
      todoList.filter((t)=> {
        return t.id !== id
      })
    )
  }
  return (
    <div>
      <input type="text" placeholder='Enter TODO' value={input} onChange={(e)=> setInput(e.target.value)}/>
      <button onClick={() => addTodoItem()}>Add</button>
      <ul>
        {todoList.map(t => <li key={t.id}>
          <input type="checkbox" checked={t.completed == true} 
          onChange={()=> toggleCompleted(t.id)}/>
          <span className={t.completed ? 'strike-through' : ''}>{t.text}</span>
          <button onClick={()=> deleteTodo(t.id)}>Delete</button>
        </li>)}
      </ul>
    </div>
  )
}

export default App
