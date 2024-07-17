import React from 'react'
import Nav from '@/components/nav'
import Carousel from '@/components/carousel'
import Products from '@/components/products'
import Footer from '@/components/footer'


function page() {
  return (
    <>
      <Nav/>
      <Carousel/>
      <Products/>
      <Footer/>
    </>
  )
}

export default page