import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

const MainLayout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainLayout