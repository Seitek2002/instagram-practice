import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Auth, Home } from './pages/index'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </>
  )
}

export default App
