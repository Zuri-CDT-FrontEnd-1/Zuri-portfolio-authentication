import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Welcome';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Welcome from './Pages/Home/Welcome';


function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Welcome/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
