import React from 'react'
import Header from '../components/home/Header'
import Hero from '../components/home/Hero'
import ExclusiveDeals from '../components/home/ExclusiveDeals'
import PopularCategories from '../components/home/PopularCategories'
import PopularRestaurants from '../components/home/PopularRestaurants'
import MobileApp from '@/components/home/MobileApp'
import Partner from '@/components/home/Partner'

export default function Home() {
  return (
    <>
      <Header />
      <div className='relative top-25'>
        <Hero />
        <ExclusiveDeals />
        <PopularCategories />
        <PopularRestaurants />
        <MobileApp />
        <Partner />
      </div>
    </>
  )
}
