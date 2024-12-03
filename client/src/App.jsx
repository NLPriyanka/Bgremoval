// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Result from './Pages/Result'
import Buycredit from './Pages/Buycredit'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'




const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/result' element={<Result/>} />
        <Route path='/buy' element={<Buycredit/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App