import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './Landing'
import ReviewSection from '../traveller/src/ReviewSection'
import Packageview from './Packageview'
import QuoteForm from '../traveller/src/components/QuoteForm'



function App() {
  
  return (
    <>
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/blog' element={<ReviewSection/>}/>
        <Route path='/packageview' element={<Packageview/>}/>
        <Route path='/quote' element={<QuoteForm/>}/>

    </Routes>
    
    
    </>
  )
}

export default App
