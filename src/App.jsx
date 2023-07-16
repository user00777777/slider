import { useState } from 'react'
import{Routes,Route } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout'
import Slider from './Components/Slider/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Routes>
   <Route path='/' element={<Layout/>}>
   <Route path='slider' element={<Slider/>}/>







   </Route>
    
    </Routes>
    </div>
  )
}

export default App
