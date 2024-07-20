import React from 'react'
import Nav from '@/components/nav'
import Breadcrumbs from '@/components/breadcrumbs'
import Products from '@/components/products'
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