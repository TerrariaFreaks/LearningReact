import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState("")
  const [results, setResults] = useState([])

  const fetchData = async () => {
    const data = await fetch(`http://dummyjson.com/recipes/search?q=${input}`)
    const json = await data.json()
    setResults(json?.recipes)
  }
  useEffect(()=> {
    fetchData()
  }, [input]) 
  return (
    <div>
      <h1>Auto Complete Search Bar</h1>
      <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/> 
      </div>
      <div>
        {results.map((r)=><span key={r.id}>{r.name}</span>)}
      </div>
    </div>
  )
}

export default App
