import React from 'react'
import Home from './pages/Home'
import MainLayout from "./layouts/MainLayout"
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home />}/>
        </Route>
      </Routes>
    </>
  )
}
