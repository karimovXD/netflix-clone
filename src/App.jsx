import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { message } from 'antd';
//pages
import Home from './pages/Home';
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Movie from './pages/Movie';
import StartSignUp from './pages/StartSignUp';
import Profile from './pages/Profile';
//components
import Loading from './components/Loading';
import { setMyContext } from './context/MyContext';

function App() {
  const { user } = setMyContext();

  const homePage = () => {
    if (user === '') return <Loading />
    else if (user) return <Home />
    else return <SignUp />
  }

  //if (user) {
  //  navigate('/')
  //} else if (user) {
  //  navigate('/')
  //} else {
  //  navigate('/signup')
  //}

  return (
    <Routes>
      <Route path='/' element={homePage()} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/start_signup' element={<StartSignUp />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/movie/:id' element={<Movie />} />
    </Routes>
  )
}

export default App
