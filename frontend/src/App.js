import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './container/Home'
export default function App() {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<SignUp />} />
      <Route path='/*' element={<Home />} />
    </Routes>
  )
}
