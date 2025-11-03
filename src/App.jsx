import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './Landing'
import ReviewSection from '../traveller/src/ReviewSection'



function App() {
  
  return (
    <>
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/blog' element={<ReviewSection/>}/>

    </Routes>
    
    
    </>
  )
}

export default App
