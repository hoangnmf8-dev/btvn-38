import React from 'react'
import Header from './components/page/Header'
import Hero from './components/page/Hero'

export default function App() {
  return (
    <>
      <Header />
      <div className='relative top-25'>
        <Hero />
      </div>
    </>
  )
}
