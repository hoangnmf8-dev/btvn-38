import React from 'react'
import Hero from '../components/home/Hero'
import ExclusiveDeals from '../components/home/ExclusiveDeals'
import PopularCategories from '../components/home/PopularCategories'
import PopularRestaurants from '../components/home/PopularRestaurants'
import MobileApp from '../components/home/MobileApp'
import Partner from '../components/home/Partner'
import AboutUs from '../components/home/AboutUs'
import StatsCounter from '../components/home/StatsCounter'

export default function Home() {
  return (
    <>
      <Hero />
      <ExclusiveDeals />
      <PopularCategories />
      <PopularRestaurants />
      <MobileApp />
      <Partner />
      <AboutUs />
      <StatsCounter />
    </>
  )
}
