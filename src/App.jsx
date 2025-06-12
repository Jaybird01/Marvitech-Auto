import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './Pages/HomePage.jsx'
import NotFound from './Pages/NotFound.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route  path="/" element={<HomePage />} />
          <Route path="*" element= {<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
