import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './assets/components/Signup'
import Login from './assets/components/Login'
import Navbar from './assets/components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './assets/components/Statebasics'
import Counter from './assets/components/Counter'
import Welcome from './assets/components/Welcome'
import Api from './assets/components/Api'
import Pokemon from './assets/components/Pokemon'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/s' element={<StateBasics />} />
        <Route path='/c' element={<Counter />} />
        <Route path='/h' element={<Welcome />} />
        <Route path='/A' element={<Api />} />
       <Route path='/p' element={<Pokemon/>} />
      </Routes>
      

    </>
  )
}

export default App
  
