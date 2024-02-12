import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Trailer from './Trailer'

const Home = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<App/>}></Route>
            <Route path='/Trailer/:id' element={<Trailer/>}></Route>
        </Routes>
    </div>
  )
}

export default Home 