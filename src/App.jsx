import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import("./Pages/Home/Home.jsx"));
const Login = lazy(() => import("./Pages/Login/Login"));
const Register = lazy(() => import("./Pages/Register/Register"));

function App() {
  return (
    <Suspense>
      <Routes>
         <Route path='/Zuri-portfolio-authentication/' element={<Home/>}/>
         <Route path='/Zuri-portfolio-authentication/login' element={<Login/>}/>
         <Route path='/Zuri-portfolio-authentication/register' element={<Register/>}/>
      </Routes>
    </Suspense>
  )
}

export default App
