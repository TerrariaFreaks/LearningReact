import { useState } from 'react'
import ProgressBar from './components/ProgressBar'
import './App.css'

function App() {
  

  return (
    <div className='App'>
    <h1>Progress Bar</h1>
    <ProgressBar progress = {70} />
    </div>
  )
}

export default App
