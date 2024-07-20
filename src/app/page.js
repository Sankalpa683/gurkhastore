import React from 'react'
import Nav from '@/components/nav'
import Carousel from '@/components/carousel'
import Every from '@/components/every'
import Footer from '@/components/footer'


function page() {
  return (
    <>
      <Nav/>
      <Carousel first="The " highlight="modern" text=" way for everyone to shop groceries at Gurkha Suparmarket"/>
      <Every/>
      <Footer/>
    </>
  )
}

export default page