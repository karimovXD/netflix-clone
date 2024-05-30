import React from 'react';
import { Route, Routes } from 'react-router-dom';
//pages
import Home from './pages/Home';
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}

export default App
