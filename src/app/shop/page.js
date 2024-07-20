import React from 'react'
import Nav from '@/components/nav'
import Breadcrumbs from '@/components/breadcrumbs'
import Products from '@/components/landing/products'
import Footer from '@/components/footer'

function page() {
  return (
    <>
        <Nav/>
        <Breadcrumbs href='shop'/>
        
    </>
  )
}

export default page