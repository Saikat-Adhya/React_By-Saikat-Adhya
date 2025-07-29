import React from 'react'
import Registration from './pages/Registration'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ProtectedRoutes from './components/ProtectedRoutes'
import UpdatePage from './pages/UpdatePage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/update/:id" element={<ProtectedRoutes><UpdatePage /></ProtectedRoutes>} />
      </Routes>
    </>
  )
}

export default App

