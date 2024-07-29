import React from 'react'
import Nav from '@/components/nav'
import Breadcrumbs from '@/components/breadcrumbs'
import Carousel from '@/components/carousel'
import Viewall from '@/components/shop/viewall'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'

function page() {
  return (
    <>
      <Nav />
      <Carousel first="Browse " highlight="Our Catagory" text=' Updated Regularly with New Additions' />
      <section>
        <div className='grid grid-cols-1 gap-4 container w-full'>
          <div className='w-full'>
            <div className='mx-auto px-4 md:px-6'>
              <Breadcrumbs href='Shop' />
            </div>

            <Viewall />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default page