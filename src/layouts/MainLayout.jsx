import React from 'react'
import Header from '@/components/main_layout/Header'
import { Outlet } from 'react-router-dom'
import Footer from '@/components/main_layout/Footer'
import { useAuth } from '@/stores/authStore'


export default function MainLayout() {
  const {token} = useAuth();
  return (
    <div>
      <Header />
      <div className='relative top-25'>
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}
