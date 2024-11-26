import React from 'react'
import Hero from './Hero'
import ChooseUs from './ChooseUs'
import Products from '../shop/Products'
import Expricences from './Expricences'
import Materials from './Materials'
import Testimonials from './Testimonials'
import CompanySlider from './CompanySlider'



const Home = () => {
  return (
    <>
      <Hero />
      <ChooseUs />
      {/* <CompanySlider/> */}
      <Products headline="Best Selling Product" />
      <Expricences/>
      <Materials/>
      <Testimonials/>
    </>
  )
}

export default Home