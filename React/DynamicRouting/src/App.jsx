import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Show from './pages/Show'


const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<Show />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>    
    </div>
  )
}

export default App
